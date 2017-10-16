import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { toastr } from 'react-redux-toastr'

import Api from '../../main/api'
import Grid from '../../common/layout/Grid'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'
import Box from '../../common/template/box/Box'
import BoxHeader from '../../common/template/box/BoxHeader'
import BoxBody from '../../common/template/box/BoxBody'

class AdmProcessDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admProcess: {},
            isLoading: false
        }
    }

    componentWillMount() {
        this.setState({ ...this.state, isLoading: true })
        Api.getAdmProcess(`/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({ ...this.state, admProcess: res.data, isLoading: false })
            })
            .catch(e => {
                toastr.error('Erro', 'Não foi acessar o servidor!')
                this.setState({ ...this.state, isLoading: false })
            })
    }

    render() {
        const { admProcess } = this.state
        return (
            <div className="container-fluid">
                <div className="main">
                    <ContentHeader title='Processo Administrativo' />
                    <Content >
                        <Box color='primary direct-chat direct-chat-primary'>
                            {this.state.isLoading &&
                                <div className="overlay">
                                    <i className="fa fa-refresh fa-spin"></i>
                                </div>
                            }
                            <BoxBody>
                                <div className="box-widget widget-user-2">
                                    <div className="widget-user-header bg-blue">
                                        <div className="widget-user-image">
                                            <a href={admProcess.urlReferenceTerm} target="_blank" className="btn btn-app" style={{ height: '70px', float: 'left', marginRight: '20px' }}>
                                                <i className="fa fa-save"></i> Termo de <br />referência</a>
                                        </div>
                                        <h3 className="widget-user-username">{admProcess.modality}  &nbsp; <b>nº:</b> {admProcess.modalityNumber} </h3>
                                        <h5 className="widget-user-desc">{admProcess.description}</h5>
                                    </div>
                                </div>
                            </BoxBody>
                            <div className="box-footer no-padding">
                                <ul className="nav nav-stacked">
                                    <li style={{ margin: '20px' }}><b>PRTP:</b> {admProcess.prctp}</li>
                                    <li style={{ margin: '20px' }}><b>Objeto:</b> {admProcess.object}</li>
                                    <li style={{ margin: '20px' }}><b>Data de publicação:</b> {moment(admProcess.date, 'YYYY/MM/DD').format('DD/MM/YYYY')}</li>
                                    <li style={{ margin: '20px' }}><b>Dotação orçamentária:</b> R$ {admProcess.budgetAllocation}</li>
                                </ul>
                            </div>
                        </Box>
                    </  Content>
                </div>
            </div>
        )
    }
}

export default AdmProcessDetails;