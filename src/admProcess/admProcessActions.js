import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = () => {
    const request = Api.getAdmProcess()
    return {
        type: "ADM_PROCESS_FETCHED",
        payload: request
    }
}

export const create = (values) => {
    return submit(values, 'postAdmProcess')
}

export const update = (values) => {
    return submit(values, 'putAdmProcess')
}

export const remove = (values) => {
    return submit(values, 'deleteAdmProcess')
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
export const showUpdate = (admProcess) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('admProcessForm', admProcess)
    ]
}

export const showDelete = (admProcess) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('admProcessForm', admProcess)
    ]
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('admProcessForm', INITIAL_VALUE)
    ]
}

export const getModalidadeSelect = () => {
    const modalidades = {
        modalidades: [
            {
                id: 1,
                name: 'Teste'
            },
            {
                id: 2,
                name: "Teste 2"
            }
        ]
    }
    return {
        type: 'MODALIDADE_SELECT_FETCHED',
        payload: modalidades
    }
}