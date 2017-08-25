import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './userManagementActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import LabelAndInput from '../common/form/LabelAndInput'

const validate = values => {
    const errors = {}
    if (!values.nome) {
        errors.nome = 'Required'
    } else if (values.nome.length > 15) {
        errors.nome = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.telefone) {
        errors.telefone = 'Required'
    } else if (isNaN(Number(values.telefone))) {
        errors.telefone = 'Must be a number'
    } else if (Number(values.age) < 8) {
        errors.telefone = 'Sorry, invalid number'
    }
    return errors
}

const warn = values => {
    const warnings = {}
    if (!values.endereco) {
        warnings.endereco = 'Hmm, is empty...'
    }
    return warnings
}

class UserManagementForm extends Component {
    componentWillMount() {
    }

    render() {
        const { handleSubmit, readOnly, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <BoxBody>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 3' placeholder='Informe um Nome*' />

                    <Field name='email' component={LabelAndInput} type="email" label='Email'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um email*' />

                    <Field name='tipo' component={LabelAndInput} label='Tipo'
                        cols='12 3' readOnly={readOnly} placeholder='Informe o tipo do usuario' />

                    <Field name='telefone' component={LabelAndInput} label='Telefone'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />

                    <Field name='endereco' component={LabelAndInput} readOnly={readOnly}
                        label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                    <Field name='bairro' component={LabelAndInput} label='Bairro'
                        cols='12 3' readOnly={readOnly} placeholder='Informe o bairro' />

                    <Field name='cidade' component={LabelAndInput} label='Cidade'
                        cols='12 3' readOnly={readOnly} placeholder='Informe a cidade' />
                </BoxBody>

                <BoxFooter >
                    <button type='submit' disabled={submitting} className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-warning' disabled={pristine || submitting} onClick={reset}> Limpar </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </BoxFooter>
            </form>
        )
    }
}

UserManagementForm = reduxForm({
    form: 'usersForm',
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form 
    destroyOnUnmount: false
})(UserManagementForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementForm)