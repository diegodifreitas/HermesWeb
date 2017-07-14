import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './oscActions'
import Box from '../common/template/box/Box'

import BoxHeader from '../common/template/box/BoxHeader'
import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'

import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndCombo from '../common/form/LabelAndCombo'
import LabelAndDate from '../common/form/LabelAndDate'

class OscForm extends Component {
    componentWillMount() {
    }

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <BoxBody>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome da Organização' cols='12 12' placeholder='Informe o Nome da Organização' />

                    <Field name='cnpj' component={LabelAndInput} readOnly={readOnly}
                        label='CNPJ' cols='12 3' placeholder='Informe o CNPJ' />

                    <Field name='inscricaoConselho' component={LabelAndInput} readOnly={readOnly}
                        label='Inscrição no Conselho Municipal' cols='12 6' placeholder='Informe o número da matrícula no conselho municipal' />

                    <Field name='email' component={LabelAndInput} label='Email'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um email para a organização' type='email' />

                    <Field name='endereco' component={LabelAndInput} readOnly={readOnly}
                        label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                    <Field name='bairro' component={LabelAndInput} label='Bairro'
                        cols='12 3' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                    <Field name='telefone' component={LabelAndInput} label='Telefone'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />
                </BoxBody>
                <Box color='danger'>
                    <BoxHeader title='Responsavél' />
                    <BoxBody>
                        <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                            label='Nome do Responsavél Legal*' cols='12 12' placeholder='Nome da responsável pela organização' />

                        <Field name='cargo' component={LabelAndInput} readOnly={readOnly}
                            label='Cargo' cols='12 3' placeholder='Informe o Cargo' />

                        <Field name='cpf' component={LabelAndInput} readOnly={readOnly}
                            label='CPF' cols='12 6' placeholder='Informe o CPF do Responsavél' />

                        <Field name='rg' component={LabelAndInput} label='RG'
                            cols='12 3' readOnly={readOnly} placeholder='Informe o RG do Responsavél' type='email' />

                        <Field name='endereco' component={LabelAndInput} readOnly={readOnly}
                            label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                        <Field name='bairro' component={LabelAndInput} label='Bairro'
                            cols='12 3' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                        <Field name='telefone' component={LabelAndInput} label='Telefone'
                            cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />

                        <Field name='email' component={LabelAndInput} label='Email'
                            cols='12 4' readOnly={readOnly} placeholder='Informe o email do Responsavél' type='email' />
                        <Field name='inicioDoMandato' component={LabelAndDate} label='Início do Mandato'
                            cols='12 4' readOnly={readOnly} placeholder='Informe a data de início do mandato' />
                        <Field name='terminoDoMandato' component={LabelAndDate} label='Término do Mandato'
                            cols='12 4' readOnly={readOnly} placeholder='Informe a data de término do mandato' />
                    </BoxBody>
                </Box>
                <BoxFooter >
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </BoxFooter>
            </form>
        )
    }
}

OscForm = reduxForm({ form: 'admProcessForm', destroyOnUnmount: false })(OscForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OscForm)