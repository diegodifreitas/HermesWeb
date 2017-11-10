import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

export const updateOsc = (values) => {
    return submit(values, 'putOsc')
}

export const updatePublicServer = (values) => {
    return submit(values, 'putServer')
}

export const updateAdm = (values) => {
    return submit(values, 'putUser')
}

export const getUserById = (id) => {
    //const search = `?email=${email}`

    return dispatch => {
        Api.getUserById(id)
            .then(resp => {
                dispatch({ type: 'USER_FETCHED', payload: resp.data })
                dispatch(init(resp.data))
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }

}


const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch({ type: 'USER_FETCHED', payload: values })
                dispatch(init(values))
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export const init = (data) => {
    return [
        showTabs('tabList'),
        selectTab('tabList'),
        initialize('accountInfoForm', data)
    ]
}