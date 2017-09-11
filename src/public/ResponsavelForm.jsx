import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './registerActions'

import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndDate from '../common/form/LabelAndDate'

class ResponsavelForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <div className="form">
                <legend> Responsavél </legend>
                <Field name='member.name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome do Responsavél Legal' cols='12 12' placeholder='Nome da responsável pela organização' />

                <Field name='member.cargo' component={LabelAndInput} readOnly={readOnly}
                    label='Cargo' cols='12 3' placeholder='Informe o Cargo' />

                <Field name='member.cpf' component={LabelAndInput} readOnly={readOnly}
                    label='CPF' cols='12 6' placeholder='Informe o CPF do Responsavél' />

                <Field name='member.rg' component={LabelAndInput} label='RG'
                    cols='12 3' readOnly={readOnly} placeholder='Informe o RG do Responsavél' />

                <Field name='member.street' component={LabelAndInput} readOnly={readOnly}
                    label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                <Field name='member.neighborhood' component={LabelAndInput} label='Bairro'
                    cols='12 3' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                <Field name='member.phone' component={LabelAndInput} label='Telefone'
                    cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />

                <Field name='member.email' component={LabelAndInput} label='Email'
                    cols='12 4' readOnly={readOnly} placeholder='Informe o email do Responsavél' type='email' />

                <Field name='member.inicioDoMandato' component={LabelAndDate} label='Início do Mandato'
                    cols='12 4' readOnly={readOnly} placeholder='Informe a data de início do mandato' type='text' />

                <Field name='member.terminoDoMandato' component={LabelAndDate} label='Término do Mandato'
                    cols='12 4' readOnly={readOnly} placeholder='Informe a data de término do mandato' type='text' />

                <button type='submit' onClick={handleSubmit} className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
            </div>
        )
    }
}

ResponsavelForm = reduxForm({ form: 'oscForm', destroyOnUnmount: false })(ResponsavelForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ResponsavelForm)