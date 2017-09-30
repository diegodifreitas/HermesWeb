import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = (field, value, osc) => {

    let search = value ? `?q=${value}` : ''

    const request = Api.getMember(search, osc)
    return {
        type: "MEMBER_FETCHED",
        payload: request
    }
}

export const create = (values, osc) => {
    return submit(values, 'postMember')
}

export const update = (values, osc) => {
    return submit(values, osc, 'putMember')
}

export const remove = (values, osc) => {
    return submit(values, osc, 'deleteMember')
}

const submit = (values, osc, method) => {
    return dispatch => {
        Api[method](values, osc)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

//TODO - refatorar trecho para não ocorrer código repetido.
export const showUpdate = (members) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('membersForm', members)
    ]
}

export const showDelete = (members) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('membersForm', members)
    ]
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('membersForm', INITIAL_VALUE)
    ]
}