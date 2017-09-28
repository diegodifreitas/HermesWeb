import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = (field, value) => {
   
    let search = value ? `?q=${value}` : ''
   
    const request = Api.getUser(search)
    return {
        type: "USERS_FETCHED",
        payload: request
    }
}

export const create = (values) => {
    return submit(values, 'postUser')
}

export const update = (values) => {
    return submit(values, 'putUser')
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
                //alterar isso quando integrar com a API
                toastr.error('Erro', 'Fica ativo ai, ta dando erro!')
                //e.response.data.errors.forEach( error => toastr.error('Erro', error))           
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