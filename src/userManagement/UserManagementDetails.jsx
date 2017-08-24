import React, { Component } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import ButtonIcon from '../common/ui/button/ButtonIcon'
import LabelAndText from '../common/form/LabelAndText'
import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'

class UserManagementDetails extends Component {
    render() {
        var styles = {
            modal: { overlay: { zIndex: 1040 } },
            imageUserDetails: {
                color: 'white',
                height: '100px',
                width: '100px',
                border: '2px solid #ecf0f5',
            },
        }

        const { modal, closeModal, showUpdate, showDelete, user } = this.props

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
                            <h4 className="modal-title">Detalhes do Usuário</h4>
                        </div>
                        <div className="modal-body">
                            <Grid cols='4 4 4 4'>
                                <Row>
                                    <div className="">
                                        <img src={user.imagem}
                                            className='img img-responsive img-circle'
                                            style={styles.imageUserDetails}
                                            alt="user profile" />
                                    </div>
                                </Row>
                                <Row>
                                    <h3 >{user.nome}</h3>
                                    <h5 >{user.tipo}</h5>
                                </Row>
                            </Grid>
                            <Grid cols='8 8 8 8'>
                                <Row>
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Email:'
                                        text={user.email}
                                    />
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Cidade:'
                                        text={user.cidade}
                                    />
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Endereço:'
                                        text={user.endereco}
                                    />
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Telefone:'
                                        text={user.telefone}
                                    />
                                </Row>
                            </Grid>
                        </div>
                        <div className="modal-footer">
                            <ButtonIcon cssStyle='warning' onClick={() => 
                                showUpdate(user)} icon='pencil' 
                                tooltip='Editar'/>
                            <Link to='/messages' >
                                <ButtonIcon cssStyle='primary'
                                 onClick={() => null} 
                                 icon='dashboard' 
                                 tooltip='Enviar mensagem'/>
                            </Link>
                            <ButtonIcon cssStyle='danger' tooltip='Deletar' onClick={() => showDelete(user)} icon='trash-o' />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({ modal: state.modal })
const mapDispatchToProps = dispatch => bindActionCreators({ openModal, closeModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementDetails)
