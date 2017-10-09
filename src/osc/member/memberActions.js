import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../../main/api'
import { showTabs, selectTab } from '../../common/tabs/tabActions'
import { openModal, closeModal } from '../../common/ui/modal/modalActions'

const INITIAL_VALUE = {}

export const getList = (field, value) => {
    let search = value ? `?q=${value}` : ''
    const request = Api.getMember(search)
    return [
        requestMember(),
        {
            type: "MEMBER_RECEIVE",
            payload: request
        }
    ]
}

export const requestMember = member => ({
    type: 'MEMBER_REQUEST',
    payload: member
})

export const create = (values) => {
    return submit(values, 'postMember')
}

export const update = (values) => {
    return submit(values, 'putMember')
}

export const remove = (values) => {
    return submit(values, 'deleteMember')
}

const submit = (values, method) => {
    return dispatch => {
        dispatch(requestMember(values))
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

export const showUpdate = (member) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('memberForm', member)
    ]
}

export const showDelete = (member) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('memberForm', member)
    ]
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('memberForm', INITIAL_VALUE)
    ]
}

export const clean = () => {
    return [
        initialize('memberForm', INITIAL_VALUE)
    ]
}
