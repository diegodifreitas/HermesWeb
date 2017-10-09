import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { openModal, closeModal } from '../../common/ui/modal/modalActions'

import BoxBody from '../../common/template/box/BoxBody'
import BoxFooter from '../../common/template/box/BoxFooter'
import LabelAndInput from '../../common/form/LabelAndInput'
import LabelAndCombo from '../../common/form/LabelAndCombo'
import LabelAndUpload from '../../common/form/LabelAndUpload'
import LabelAndDate from '../../common/form/LabelAndDate'
import LabelAndToggle from '../../common/form/LabelAndToggle'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

import { validate } from '../../validate/memberFormValidate'

class MemberForm extends Component {

    render() {
        const { modal, closeModal, handleSubmit, readOnly, pristine, reset, submitting, user } = this.props

        var styles = {
            modal: { overlay: { zIndex: 1040 } },
            modalBody: {
                maxHeight: "calc(100vh - 80px)",
                overflowY: "auto"
            }
        }

        const handleUpdate = (user) => {
            closeModal()
        }

        const handleDelete = (user) => {
            closeModal()
        }

        const handleCreate = (user) => {
            closeModal()
        }

        return (
            <Modal
                contentLabel="Member Modal"
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
                                        cssStyle='warning' tooltip='Limpar Formulário' type='button'
                                        disabled={pristine || submitting}
                                        onClick={reset} icon='eraser' />
                                    {this.props.id &&
                                        <span>
                                            <ButtonIcon cssStyle='danger' tooltip='Excluir'
                                                onClick={() => handleDelete(user)} icon='trash-o' />
                                            <ButtonIcon
                                                cssStyle='success' tooltip='Editar' type='submit'
                                                disabled={submitting}
                                                onClick={() => handleUpdate(user)} icon='edit' />
                                        </span>
                                    }
                                    {!this.props.id &&
                                        <ButtonIcon
                                            cssStyle='success' tooltip='Salvar' type='submit'
                                            disabled={submitting}
                                            onClick={() => handleCreate(user)} icon='plus' />
                                    }
                                </div>

                            </form >
                        </div>
                    </div>
                </div>
            </Modal >
        )
    }
}

const selector = formValueSelector('memberForm')
MemberForm = reduxForm({
    form: 'memberForm',
    validate,
    destroyOnUnmount: false
})(MemberForm)
const mapStateToProps = state => ({
    modal: state.modal,
    user: state.auth.user,
    id: selector(state, 'id'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ openModal, closeModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MemberForm)