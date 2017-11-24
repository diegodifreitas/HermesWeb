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
                if (e.response.data.errors) {
                    e.response.data.errors.forEach(error => toastr.error("Erro", "Campo " + error.fieldName + " - " + error.message))
                } else if (e.response.data.msg) {
                    toastr.error("Erro", e.response.data.msg)
                } else if (e.response.data.error) {
                    toastr.error("Erro", "Email já cadastrado no sistema!")
                }
            })
    }
}

export const clean = () => {
    return [
        initialize('oscForm', INITIAL_VALUE)
    ]
}

//window.location.href = 'http://localhost:3000/singup/success';
