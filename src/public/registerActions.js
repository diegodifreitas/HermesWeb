import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import Api from '../main/api'

const INITIAL_VALUE = {}

export const requestOsc = osc => ({
    type: 'OSC_REQUEST',
    payload: osc
})

export const create = (values) => {

    values.aprovalADM = false
    values.aprovalADM = false
    values.type = 'OSC'

    return submit(values, 'postOsc')
}

const submit = (values, method) => {
    return dispatch => {
        dispatch(requestOsc(values))
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                window.location.href = `http://localhost:3000/singup/success`
                dispatch(clean())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error(error.fieldName, error.message))
            })
    }
}

export const clean = () => {
    return [
        initialize('oscForm', INITIAL_VALUE)
    ]
}

//window.location.href = 'http://localhost:3000/singup/success';
