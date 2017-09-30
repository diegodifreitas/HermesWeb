import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './oscActions'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndDate from '../common/form/LabelAndDate'

import ButtonIcon from '../common/ui/button/ButtonIcon'

import BoardMemberList from './boardMember/BoardMemberList'

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

class OscForm extends Component {

    render() {
        const { handleSubmit, readOnly, openModal, boardMemberList } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <BoxBody>
                    <fieldset>
                        <legend> Dados de acesso </legend>
                        <Field name='name' component={LabelAndInput} readOnly={readOnly}
                            label='Nome da Organização' cols='12 6' placeholder='Informe o Nome da Organização' />

                        <Field name='cnpj' component={LabelAndInput} readOnly={readOnly}
                            label='CNPJ' cols='12 3' placeholder='Informe o CNPJ' />

                        <Field name='email' component={LabelAndInput} label='Email'
                            cols='12 3' readOnly={readOnly} placeholder='Informe um email para a organização' type='email' />

                        <Field name='password' component={LabelAndInput} label='Senha'
                            cols='12 4' readOnly={readOnly} placeholder='Informe uma senha' />

                        <Field name='phone' component={LabelAndInput} label='Telefone'
                            cols='12 4' readOnly={readOnly} placeholder='Informe um número de telefone' />

                        <Field name='registrationCM' component={LabelAndInput} label='Conselho Municipal'
                            cols='12 4' readOnly={readOnly} placeholder='Informe o número do registro' />
                    </fieldset>
                </BoxBody>
                <BoxBody>
                    <fieldset>
                        <legend> Localização </legend>
                        <Field name='address.street' component={LabelAndInput} readOnly={readOnly}
                            label='Endereço' cols='12 3' placeholder='Ex: Av. João de Camargo, 89' />

                        <Field name='address.number' component={LabelAndInput} readOnly={readOnly}
                            label='Numero' cols='12 3' placeholder='Ex: 456' />

                        <Field name='address.neighborhood' component={LabelAndInput} label='Bairro'
                            cols='12 3' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                        <Field name='address.city' component={LabelAndInput} readOnly={readOnly}
                            label='Cidade' cols='12 3' placeholder='Ex: Av. Santa Rita do Sapucai - MG' />
                    </fieldset>
                </BoxBody>
                <BoxBody>
                    <fieldset>
                        <legend> Membros da Diretoria
                            <ButtonIcon cssStyle='success' tooltip='Adicionar Membro Da Diretoria' type="button"
                                onClick={() => openModal()} icon='plus' />
                        </legend>
                        <BoardMemberList list={boardMemberList} />
                    </fieldset>
                </BoxBody>

                <BoxFooter >
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </BoxFooter>
            </form>
        )
    }
}

OscForm = reduxForm(
    {
        form: 'oscForm',
        validate,
        destroyOnUnmount: false,
        initialValues: {
            approvalADM: true,
            approvalPS: true,
            type: "OSC"
        }
    })(OscForm)

const selector = formValueSelector('oscForm')
const mapStateToProps = state => (
    {
        visible: state.modal.visible,
        user: state.modal.data,
        boardMemberList: selector(state, 'boardMemberList')
    })
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        init,
        openModal,
        closeModal
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OscForm)