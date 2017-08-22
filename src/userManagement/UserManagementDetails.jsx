import React, { Component } from 'react'
import Modal from 'react-modal'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'

import LabelAndText from '../common/form/LabelAndText'
import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'

import styles from './userManagement.css.js'

class UserManagementDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { modalIsOpen: false };
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleModalCloseRequest = () => {
        // opportunity to validate something and keep the modal open even if it
        // requested to be closed
        this.setState({ modalIsOpen: false });
    }

    handleSaveClicked = (e) => {
        alert('Save button was clicked');
    }

    render() {
        var modalStyles = { overlay: { zIndex: 1040 } };
        const user = this.props.user
        return (

            <button className='btn btn-default' onClick={this.openModal} >
                <i className='fa fa-address-book' />

                <Modal
                    contentLabel="User Modal"
                    style={modalStyles}
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.handleModalCloseRequest}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleModalCloseRequest}>
                                    <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title">Detalhes do Usuário</h4>
                            </div>
                            <div className="modal-body">
                                <Grid cols='4 4 4 4'>
                                    <Row>
                                        <div className="">
                                            <img src={user.imagem}
                                                className='img img-responsive img-circle'
                                                style={styles.imageUserDetails}
                                                alt="user image" />
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
                                <button className='btn btn-warning' onClick={() => this.props.update(user)} >
                                    <span> <i className='fa fa-pencil' /> Editar </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </button>
        )
    }
}

export default UserManagementDetails