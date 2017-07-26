import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../../main/api'
import { showTabs, selectTab } from '../../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = (search = '') => {
    const request = Api.getMonitoringProcess(search)
    return {
        type: "MONITORING_PROCESS_FETCHED",
        payload: request
    }
}

export const create = (values) => {
    return submit(values, 'postMonitoringProcess', values.idProcesso)
}

export const update = (values, search) => {
    return submit(values, 'putMonitoringProcess', values.idProcesso)
}

export const remove = (values, search) => {
    return submit(values, 'deleteMonitoringProcess', values.idProcesso)
}

const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init(values.idProcesso))
            })
            .catch(e => {
                //alterar isso quando integrar com a API
                toastr.error('Erro', 'Fica ativo ai, ta dando erro!')
                //e.response.data.errors.forEach( error => toastr.error('Erro', error))           
            })
    }
}

//TODO - refatorar trecho para não ocorrer código repetido.
export const showUpdate = (monitoringProcess) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('monitoringProcessForm', monitoringProcess)
    ]
}

export const showDelete = (monitoringProcess) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('monitoringProcessForm', monitoringProcess)
    ]
}

export const init = (search) => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(search),
        initialize('monitoringProcessForm', INITIAL_VALUE)
    ]
}

export const load = data => ({ type: "LOAD", payload: data })