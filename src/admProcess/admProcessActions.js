import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'
import { showTabs, selectTab } from '../common/tabs/tabActions'

const INITIAL_VALUE = {}

export const getList = () => {
    const request = Api.getAdmProcess()
    return [
        requestAdmProcess(),
        {
            type: "ADM_PROCESS_RECEIVE",
            payload: request
        }
    ]
}

export const uploadFile = (file) => {
    const data = new FormData();
    data.append("files", file);

    const request = Api.postFile(data)

    return [
        {
            type: "UPLOAD_FILE",
            payload: request
        }
    ]
}


export const requestAdmProcess = admProcess => ({
    type: 'ADM_PROCESS_REQUEST',
    payload: admProcess
})

export const create = (values) => {

    console.log(values)


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
        dispatch(requestAdmProcess(values))
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