import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

export const update = (values) => {
    return submit(values, 'putPublicAdm')
}

export const getPublicAdmById = (id) => {

    return dispatch => {
        Api.getPublicAdmById(id)
            .then(resp => {
                dispatch({ type: 'PUBLIC_ADM_FETCHED', payload: resp })
                dispatch(init(resp.data))
            })
            .catch(e => {
                console.log(e)
                if (e.response.data.errors) {
                    e.response.data.errors.forEach(error => toastr.error("Erro", "Campo " + error.fieldName + " - " + error.message))
                } else if (e.response.data.msg) {
                    toastr.error("Erro", e.response.data.msg)
                } else if (e.response.data.error) {
                    toastr.error("Erro", "Ocorreu um problema interno no servidor, contate o desenvolvedor do sistema!")
                }
            })
    }

}


const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch({ type: 'PUBLIC_ADM_FETCHED', payload: values })
                dispatch(init(values))
            })
            .catch(e => {
                if (e.response.data.errors) {
                    e.response.data.errors.forEach(error => toastr.error("Erro", "Campo " + error.fieldName + " - " + error.message))
                } else if (e.response.data.msg) {
                    toastr.error("Erro", e.response.data.msg)
                } else if (e.response.data.error) {
                    toastr.error("Erro", "Ocorreu um problema interno no servidor, contate o desenvolvedor do sistema!")
                }
            })
    }
}

export const init = (data) => {
    return [
        showTabs('tabList'),
        selectTab('tabList'),
        initialize('publicAdmForm', data)
    ]
}