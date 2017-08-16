import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = () => {
    const request = Api.getAdmProcess()
    return {
        type: "ACCOUNT_INFO_FETCHED",
        payload: request
    }
}

export const create = (values) => {
    return submit(values, 'postAdmProcess')
}

export const update = (values) => {
    return submit(values, 'putAdmProcess')
}


const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                //alterar isso quando integrar com a API
                toastr.error('Erro', 'Fica ativo ai, ta dando erro!')
                //e.response.data.errors.forEach( error => toastr.error('Erro', error))           
            })
    }
}

export const init = () => {
    return [
        showTabs('tabList'),
        selectTab('tabList'),
        //getList(),
        initialize('accountInfoForm', INITIAL_VALUE)
    ]
}