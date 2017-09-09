import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import Api from '../main/api'

const INITIAL_VALUE = {}

export const create = (values) => {
    return submit(values, 'postOsc')
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

export const init = () => {
    return [
        initialize('oscForm', INITIAL_VALUE)
    ]
}