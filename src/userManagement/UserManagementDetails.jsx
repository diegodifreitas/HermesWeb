import React, { Component } from 'react'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'

import LabelAndText from '../common/form/LabelAndText'
import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'

import styles from './userManagement.css.js'

class UserManagementDetails extends Component {

    render() {
        return (
            <div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 className="modal-title">Detalhes do Usuário</h4>
                        </div>
                        <div className="modal-body">
                            <Grid cols='4 4 4 4'>
                                <Row>
                                    <div className="">
                                        <img src='http://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg'
                                            className='img-circle'
                                            style={styles.imageUserDetails}
                                            alt="user image" />
                                    </div>
                                </Row>
                                <Row>
                                    <h3 >Alexander Pierce</h3>
                                    <h5 >Founder &amp; CEO</h5>
                                </Row>
                            </Grid>
                            <Grid cols='6 6 6 6'>
                                <Row>
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Endereço:'
                                        text='Rua das Flores, 56'
                                    />
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Endereço:'
                                        text='Rua das Flores, 56'
                                    />
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Endereço:'
                                        text='Rua das Flores, 56'
                                    />
                                    <LabelAndText colsTitle='3 3 3 3'
                                        colsText='9 9 9 9'
                                        title='Endereço:'
                                        text='Rua das Flores, 56'
                                    />
                                </Row>
                            </Grid>
                            <Grid cols='2 2 2 2'>
                                <button className='btn btn-warning' onClick={() => this.props.showUpdate(null)} >
                                    <span> <i className='fa fa-pencil' /> Editar </span>
                                </button>
                            </Grid >
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserManagementDetails