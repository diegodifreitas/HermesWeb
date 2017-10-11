import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

export const update = (values) => {
    return submit(values, 'putUser')
}


const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
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