import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

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
    return submit(values, 'postMonitoringProcess')
}

export const update = (values) => {
    return submit(values, 'putMonitoringProcess')
}

export const remove = (values) => {
    return submit(values, 'deleteMonitoringProcess')
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

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('monitoringProcessForm', INITIAL_VALUE)
    ]
}

export const getFasesSelect = () => {
    const fases = {
        fases: [
            {
                id: 1,
                nome: 'Seleção'
            },
            {
                id: 2,
                nome: "Execução"
            },
            {
                id: 3,
                nome: "Monitoramento"
            },
            {
                id: 4,
                nome: "Prestação de Contas"
            }
        ]
    }
    return {
        type: 'FASES_SELECT_FETCHED',
        payload: fases
    }
}