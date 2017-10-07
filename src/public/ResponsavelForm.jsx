import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './registerActions'

import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndDate from '../common/form/LabelAndDate'
import BoxBody from '../common/template/box/BoxBody'

class ResponsavelForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit} className='form'>
                <BoxBody>

                    <Field name='boardMemberList[0].name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 10' placeholder='Informe um Nome*' />

                    <Field name='boardMemberList[0].email' component={LabelAndInput} type="email" label='Email'
                        cols='12 6' readOnly={readOnly} placeholder='Informe um email*' />

                    <Field name='boardMemberList[0].phone' component={LabelAndInput} label='Telefone'
                        cols='12 6' readOnly={readOnly} placeholder='Informe um número de telefone' />

                    <Field name='boardMemberList[0].cpf' component={LabelAndInput} label='CPF'
                        cols='12 6' readOnly={readOnly} placeholder='Ex. 126.845.658-61' />

                    <Field name='boardMemberList[0].rg' component={LabelAndInput} label='RG'
                        cols='12 6' readOnly={readOnly} placeholder='Ex. 15.754.580' />

                    <Field name='boardMemberList[0].office' component={LabelAndInput} label='Cargo'
                        cols='12 4' readOnly={readOnly} placeholder='Qual seu cargo?' />

                    <Field name='boardMemberList[0].beginningOfMandate' component={LabelAndDate} label='Início do Mandato'
                        cols='12 4' readOnly={readOnly} placeholder='Informe a data de início do mandato' type='text' />

                    <Field name='boardMemberList[0].endOfMandate' component={LabelAndDate} label='Término do Mandato'
                        cols='12 4' readOnly={readOnly} placeholder='Informe a data de término do mandato' type='text' />

                </BoxBody>
                <BoxBody>
                    <fieldset>
                        <legend> Localização </legend>
                        <Field name='boardMemberList[0].address.street' component={LabelAndInput} readOnly={readOnly}
                            label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo' />

                        <Field name='boardMemberList[0].address.number' component={LabelAndInput} readOnly={readOnly}
                            label='Numero' cols='12 6' placeholder='Ex: 456' />

                        <Field name='boardMemberList[0].address.neighborhood' component={LabelAndInput} label='Bairro'
                            cols='12 6' readOnly={readOnly} placeholder='Ex: Eletrônica' />

                        <Field name='boardMemberList[0].address.city' component={LabelAndInput} readOnly={readOnly}
                            label='Município' cols='12 6' placeholder='Ex: Santa Rita do Sapucai - MG' />
                    </fieldset>
                </BoxBody>

                <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
            </form>
        )
    }
}

ResponsavelForm = reduxForm({ form: 'oscForm', destroyOnUnmount: false })(ResponsavelForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ResponsavelForm)