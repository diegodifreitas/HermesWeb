import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import ButtonIcon from '../common/ui/button/ButtonIcon'
import LabelAndText from '../common/form/LabelAndText'
import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'

const BoardMemberDetails = props => {
    const { modal, closeModal, showUpdate, showDelete, user } = props

    var styles = {
        modal: { overlay: { zIndex: 1040 } },
        imageUserDetails: {
            color: 'white',
            height: '100px',
            width: '100px',
            border: '2px solid #ecf0f5',
        },
    }

    const handleUpdate = (user) => {
        closeModal()
        showUpdate(user)
    }

    const handleDelete = (user) => {
        closeModal()
        showDelete(user)
    }

    return (
        <Modal
            contentLabel="User Modal"
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
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <BoxBody>

                                <Field name='image' component={LabelAndUpload}
                                    label='Foto' cols='12 3 3' placeholder='Adicionar imagem' />

                                <Field name='name' component={LabelAndInput} readOnly={readOnly}
                                    label='Nome' cols='12 3' placeholder='Informe um Nome*' />

                                <Field name='email' component={LabelAndInput} type="email" label='Email'
                                    cols='12 3' readOnly={readOnly} placeholder='Informe um email*' />

                                <Field name='type' component={LabelAndCombo} label='Tipo'
                                    cols='12 3' readOnly={readOnly} placeholder='Informe o tipo do usuario'
                                    values={[
                                        { id: 1, nome: "Servidor Público" },
                                        {
                                            id: 2, nome: "Administrador",
                                            id: 3, nome: "OSC"
                                        }
                                    ]} />

                                <Field name='phone' component={LabelAndInput} label='Telefone'
                                    cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />

                                <Field name='street' component={LabelAndInput} readOnly={readOnly}
                                    label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                                <Field name='neighborhood' component={LabelAndInput} label='Bairro'
                                    cols='12 3' readOnly={readOnly} placeholder='Informe o bairro' />

                                <Field name='city' component={LabelAndInput} label='Cidade'
                                    cols='12 3' readOnly={readOnly} placeholder='Informe a cidade' />
                            </BoxBody>

                            <BoxFooter >
                                <button type='submit' disabled={submitting} className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                                <button type='button' className='btn btn-warning' disabled={pristine || submitting} onClick={reset}> Limpar </button>
                                <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                            </BoxFooter>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <ButtonIcon cssStyle='warning' tooltip='Editar'
                            onClick={() => handleUpdate(user)} icon='pencil' />
                        <Link to='/messages' >
                            <ButtonIcon cssStyle='primary'
                                onClick={() => closeModal()}
                                icon='comments-o'
                                tooltip='Enviar mensagem' />
                        </Link>
                        <ButtonIcon cssStyle='danger' tooltip='Deletar'
                            onClick={() => handleDelete(user)} icon='trash-o' />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = state => ({ modal: state.modal })
const mapDispatchToProps = dispatch => bindActionCreators({ openModal, closeModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BoardMemberDetails)
