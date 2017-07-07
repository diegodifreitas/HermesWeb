import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

export const getList = () => {
    const request = Api.getAdmProcess()
    return {
        type: "ADM_PROCESS_FETCHED",
        payload: request
    }
}

export const create = (values) => {
    return dispatch => {
        Api.createAdmProcess(values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch([
                    resetForm('admProcessForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                toastr.error('Erro', 'Fica ativo ai, ta dando erro!')
                //e.response.data.errors.forEach( error => toastr.error('Erro', error))           
            })
    }
}