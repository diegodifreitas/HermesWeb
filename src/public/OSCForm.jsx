import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './registerActions'
import LabelAndInput from '../common/form/LabelAndInput'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Campo obrigatório'
    }
    if (!values.cnpj) {
        errors.cnpj = 'Campo obrigatório'
    }
    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
    if (!values.phone) {
        errors.phone = 'Campo obrigatório'
    } else if (Number(values.phone) < 6) {
        errors.phone = 'Telefone inválido'
    }
    return errors
}

class OSCForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <div className="form">
                <legend > Organização </legend>
                <Field name='name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome da Organização' cols='12 6' placeholder='Informe o Nome da Organização' />

                <Field name='cnpj' component={LabelAndInput} readOnly={readOnly}
                    label='CNPJ' cols='12 3' placeholder='Informe o CNPJ' />

                <Field name='email' component={LabelAndInput} label='Email'
                    cols='12 3' readOnly={readOnly} placeholder='Informe um email para a organização' type='email' />

                <Field name='street' component={LabelAndInput} readOnly={readOnly}
                    label='Endereço' cols='12 4' placeholder='Ex: Av. João de Camargo, 89' />

                <Field name='neighborhood' component={LabelAndInput} label='Bairro'
                    cols='12 4' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                <Field name='phone' component={LabelAndInput} label='Telefone'
                    cols='12 4' readOnly={readOnly} placeholder='Informe um número de telefone' />
            </div >
        )
    }
}

OSCForm = reduxForm({ form: 'oscForm', validate, destroyOnUnmount: false })(OSCForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OSCForm)