import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = (value) => {

    let search = '?q=Diego Dulval' 

    const request = Api.getUser(search)
    return {
        type: "ADM_ACCOUNT_FETCHED",
        payload: request
    }
}

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
                //alterar isso quando integrar com a AP
                //toastr.success('Sucesso', 'Seus dados foram alterados com sucesso!')
                toastr.error('Erro', 'Este email já está cadastrado no sistema!')       
            })
    }
}

export const init = () => {
    return [
        showTabs('tabList'),
        selectTab('tabList'),
        getList(),
        initialize('accountInfoForm', INITIAL_VALUE)
    ]
}