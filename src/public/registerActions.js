import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import moment from 'moment'
import Api from '../main/api'
import { validate } from '../validate/oscFormValidate'

const INITIAL_VALUE = {}

export const create = (values) => {
    let data = { ...values }

    const error = validate(data)
    console.log(error)

    if (Object.keys(error).length > 0) {
        for (var [key, value] of Object.entries(error)) {
            toastr.error('Erro', value)
        }
        return null
    } else {

        if (data.hasOwnProperty("boardMemberList")) {
            data.boardMemberList = data.boardMemberList.map(x => {

                let begging = moment(x.beginningOfMandate, "DD/MM/YYYY").format("MM/DD/YYYY")
                let end = moment(x.endOfMandate, "DD/MM/YYYY").format("MM/DD/YYYY")

                if (begging < end) {
                    return {
                        ...x,
                        beginningOfMandate: moment(begging).format(),
                        endOfMandate: moment(end).format(),
                        responsible: true
                    }
                } else {
                    toastr.error('Erro', "A data de inicio deve ser anterior a do término do mandato")
                    throw "A data de inicio deve ser anterior a do término do mandato"
                    return null
                }
            })
        } else {
            toastr.error('Erro', "Preencha as informações do Responsável")
            throw "Preencha as informações do Responsável"
        }

        return submit(data, 'postOsc')
    }
}

const submit = (values, method) => {
    return dispatch => {
        Api[method](values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                window.location.href = 'http://localhost:3000/singup/success';
                dispatch(init())
            })
            .catch(e => {
                //alterar isso quando integrar com a API
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export const init = () => {
    return [
        initialize('oscForm', INITIAL_VALUE)
    ]
}