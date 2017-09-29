import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { init } from './boardMemberActions'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndCombo from '../common/form/LabelAndCombo'
import LabelAndUpload from '../common/form/LabelAndUpload'
import LabelAndDate from '../common/form/LabelAndDate'
import LabelAndToggle from '../common/form/LabelAndToggle'
import ButtonIcon from '../common/ui/button/ButtonIcon'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Campo obrigatório'
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

class BoardMemberForm extends Component {

    render() {
        const { modal, closeModal, handleSubmit, readOnly, pristine, reset, submitting, user } = this.props

        var styles = {
            modal: { overlay: { zIndex: 1040 } },
            modalBody: { maxHeight: "calc(100vh - 80px)",
                         overflowY: "auto"
                       }
        }

        const handleUpdate = (user) => {
            closeModal()
        }

        const handleDelete = (user) => {
            closeModal()
        }
        return (
            <Modal
                contentLabel="Membro da Diretoria Modal"
                style={styles.modal}
                className="modal-dialog"
                closeTimeoutMS={150}
                isOpen={modal.visible}
                onRequestClose={closeModal}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">Membro da Diretoria</h4>
                        </div>
                        <div className="modal-body" style={styles.modalBody}>
                            <form onSubmit={handleSubmit}>
                                <BoxBody>

                                    <Field name='responsible' component={LabelAndToggle} readOnly={readOnly}
                                        label='Responsavél' cols='12 2' />

                                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                                        label='Nome' cols='12 10' placeholder='Informe um Nome*' />

                                    <Field name='email' component={LabelAndInput} type="email" label='Email'
                                        cols='12 6' readOnly={readOnly} placeholder='Informe um email*' />

                                    <Field name='phone' component={LabelAndInput} label='Telefone'
                                        cols='12 6' readOnly={readOnly} placeholder='Informe um número de telefone' />

                                    <Field name='cpf' component={LabelAndInput} label='CPF'
                                        cols='12 6' readOnly={readOnly} placeholder='Ex. 126.845.658-61' />

                                    <Field name='rg' component={LabelAndInput} label='RG'
                                        cols='12 6' readOnly={readOnly} placeholder='Ex. 15.754.580' />

                                    <Field name='office' component={LabelAndInput} label='Cargo'
                                        cols='12 4' readOnly={readOnly} placeholder='Qual seu cargo?' />

                                    <Field name='beginningOfMandate' component={LabelAndDate} label='Início do Mandato'
                                        cols='12 4' readOnly={readOnly} placeholder='Informe a data de início do mandato' type='text' />

                                    <Field name='endOfMandate' component={LabelAndDate} label='Término do Mandato'
                                        cols='12 4' readOnly={readOnly} placeholder='Informe a data de término do mandato' type='text' />

                                </BoxBody>
                                <BoxBody>
                                    <fieldset>
                                        <legend> Localização </legend>
                                        <Field name='address.street' component={LabelAndInput} readOnly={readOnly}
                                            label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                                        <Field name='address.number' component={LabelAndInput} readOnly={readOnly}
                                            label='Numero' cols='12 6' placeholder='Ex: 456' />

                                        <Field name='address.neighborhood' component={LabelAndInput} label='Bairro'
                                            cols='12 6' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                                        <Field name='address.city' component={LabelAndInput} readOnly={readOnly}
                                            label='Cidade' cols='12 6' placeholder='Ex: Av. Santa Rita do Sapucai - MG' />
                                    </fieldset>
                                </BoxBody>

                                <div className="modal-footer">

                                    <ButtonIcon
                                        cssStyle='warning' tooltip='Limpar' type='button'
                                        disabled={pristine || submitting}
                                        onClick={reset} icon='clean' />

                                    <ButtonIcon cssStyle='default' tooltip='Cancelar'
                                        onClick={() => handleDelete(user)} icon='trash-o' />
                                    <ButtonIcon
                                        cssStyle='success' tooltip='Editar' type='submit'
                                        disabled={submitting}
                                        onClick={() => handleUpdate(user)} icon='pencil' />
                                </div>

                            </form >
                        </div>
                    </div>
                </div>
            </Modal >
        )
    }
}

BoardMemberForm = reduxForm({
    form: 'oscForm',
    validate, // <--- validation function given to redux-form
    destroyOnUnmount: false
})(BoardMemberForm)
const mapStateToProps = state => ({ modal: state.modal })
const mapDispatchToProps = dispatch => bindActionCreators({ init, openModal, closeModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BoardMemberForm)