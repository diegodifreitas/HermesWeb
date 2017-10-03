import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../../main/api'
import { openModal, closeModal } from '../../common/ui/modal/modalActions'

const INITIAL_VALUE = { }

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
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach( error => toastr.error('Erro', error))           
            })
    }
}

export const showUpdate = (boardMember) => {
    return [
        openModal(boardMember),
        initialize('boardMemberForm', boardMember)
    ]
}

export const init = () => {
    return [
        initialize('boardMemberForm', INITIAL_VALUE)
    ]
}
