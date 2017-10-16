import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../../main/api'
import { showTabs, selectTab } from '../../common/tabs/tabActions'
import { closeModal } from '../../common/ui/modal/modalActions'

const INITIAL_VALUE = { attachmentList: [{}]  }

export const getList = (idProcess, field, value) => {
    let search = idProcess ? `?admProcess=${idProcess}` : ''

    const request = Api.getDocument(search, idProcess)
    return [
        requestDocuments(),
        {
            type: "DOCUMENTS_RECEIVE",
            payload: request
        }
    ]
}

export const requestDocuments = documents => ({
    type: 'DOCUMENTS_REQUEST',
    payload: documents
})

export const create = (values) => {
    return submit(values, 'postDocument')
}

export const update = (values, idProcess) => {
    return submit(values, 'putDocument', idProcess)
}

export const remove = (values, idProcess) => {
    return submit(values, 'deleteDocument', idProcess)
}

const submit = (values, method) => {
    return dispatch => {
        dispatch(requestDocuments(values))
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

export const showUpdate = (documents) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('documentForm', documents)
    ]
}

export const showDelete = (documents) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('documentForm', documents)
    ]
}

export const init = (idProcess) => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(idProcess, null, null),
        initialize('documentForm', INITIAL_VALUE)
    ]
}

export const clean = () => {
    return [
        initialize('documentForm', INITIAL_VALUE)
    ]
}

export const close = () => {
    return [
        closeModal()
    ]
}

