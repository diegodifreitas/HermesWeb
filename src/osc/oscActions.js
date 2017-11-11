import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = { boardMemberList: [] }

export const getList = (field, value) => {
    let search = field === 'name_search' ? `?name=${value}` : ''
    const request = Api.getOsc(search)
    return [
        requestOsc(),
        {
            type: "OSC_RECEIVE",
            payload: request
        }
    ]
}

export const requestOsc = osc => ({
    type: 'OSC_REQUEST',
    payload: osc
})

export const create = (values) => {
    return submit(values, 'postOsc')
}

export const update = (values) => {
    return submit(values, 'putOsc')
}

export const remove = (values) => {
    return submit(values, 'deleteOsc')
}

const submit = (values, method) => {
    return dispatch => {
        dispatch(requestOsc(values))
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {

                if (e.response.data.errors) {
                    e.response.data.errors.forEach(error => toastr.error("Erro", "Campo " + error.fieldName + " - " + error.message))
                } else if (e.response.data.msg) {
                    toastr.error("Erro", e.response.data.msg)
                } else if (e.response.data.error) {
                    toastr.error("Erro", "Ocorreu um problema interno no servidor, contate o desenvolvedor do sistema!")
                }
            })
    }
}

//TODO - refatorar trecho para não ocorrer código repetido.
export const showUpdate = (osc) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('oscForm', osc)
    ]
}

export const showDelete = (osc) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('oscForm', osc)
    ]
}

export const init = (create = true) => {
    return [
        create ? showTabs('tabList', 'tabCreate') : showTabs('tabList'),
        selectTab('tabList'),
        getList(),
        initialize('oscForm', INITIAL_VALUE)
    ]
}

export const clean = () => {
    return [
        initialize('oscForm', INITIAL_VALUE)
    ]
}