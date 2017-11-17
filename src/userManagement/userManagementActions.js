import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = (field, value) => {

    let search = value ? `?q=${value}` : ''

    const request = Api.getUser(search)
    if (request) {
        return {
            type: "USERS_FETCHED",
            payload: request
        }
    } else {
        return {
            type: "USERS_FETCHED",
            payload: { data: { content: [] } }
        }
    }
}

export const readyById = (id) => {
    return dispatch => {
        Api.getUserById(id)
            .then(resp => {
                dispatch(showUpdate(resp.data))
            })
    }
}


export const createAdm = (values) => {
    return submit(values, 'postAdm')
}

export const approval = (values) => {
    return submit(values, 'putUser')
}

export const updateAdm = (values) => {
    return submit(values, 'putAdm')
}

export const createPs = (values) => {
    return submit(values, 'postServer')
}

export const updatePs = (values) => {
    return submit(values, 'putServer')
}

export const createOsc = (values) => {
    return submit(values, 'postOsc')
}

export const updateOsc = (values) => {
    return submit(values, 'putOsc')
}


export const remove = (values) => {
    return submit(values, 'deleteUser')
}

const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                if (e.response.data.errors) {
                    e.response.data.errors.forEach(error => toastr.error("Erro", "Campo " + error.fieldName + " - " + error.message))
                } else if (e.response.data.status === 500) {
                    toastr.error("Erro", "Ocorreu um erro interno no servidor.")
                } else {
                    toastr.error("Erro", e.response.data.msg)
                }
            })
    }
}

//TODO - refatorar trecho para não ocorrer código repetido.
export const showUpdate = (users) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('usersForm', users)
    ]
}

export const showDelete = (users) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('usersForm', users)
    ]
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('usersForm', INITIAL_VALUE)
    ]
}