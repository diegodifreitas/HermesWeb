import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../../main/api'
import { showTabs, selectTab } from '../../common/tabs/tabActions'
import { closeModal } from '../../common/ui/modal/modalActions'

const INITIAL_VALUE = { id: null }

export const getList = (idOsc, field, value) => {
    let search = idOsc ? `?osc=${idOsc}` : ''

    const request = Api.getMember(search, idOsc)

    console.log(request)
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

export const create = (values, oscId) => {
    values.oscId = oscId
    return submit(values, 'postMember', oscId)
}

export const update = (values, oscId) => {
    return submit(values, 'putMember', oscId)
}

export const remove = (values, oscId) => {
    return submit(values, 'deleteMember', oscId)
}

const submit = (values, method, oscId) => {
    return dispatch => {
        dispatch(requestMember(values))
        Api[method](values, oscId)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init(oscId))
            })
            .catch(e => {
                if( e.response.data.errors ){
                    e.response.data.errors.forEach(error => toastr.error("Erro", "Campo " + error.fieldName + " - " + error.message))
                }else {
                    toastr.error("Erro", e.response.data.msg)
                }
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

export const init = (idOsc) => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(idOsc, null, null),
        initialize('memberForm', INITIAL_VALUE)
    ]
}

export const clean = () => {
    return [
        initialize('memberForm', INITIAL_VALUE)
    ]
}

export const close = () => {
    return [
        closeModal()
    ]
}

