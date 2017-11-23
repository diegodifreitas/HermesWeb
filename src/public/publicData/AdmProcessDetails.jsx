import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { toastr } from 'react-redux-toastr'
import consts from '../../consts'


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
                this.setState({ ...this.state, admProcess: res.data, isLoading: false })
            })
            .catch(e => {
                toastr.error('Erro', 'Não foi acessar o servidor!')
                this.setState({ ...this.state, isLoading: false })
            })
    }

    renderdDocuments() {
        const list = this.state.admProcess.documents || []

        return list.map((x, index) => (
            <Grid cols='6 4' key={index}>
                <div className="info-box bg-blue">
                    <a href={`${consts.API_URL}/storage/download?fileName=` + x.url} target="_blank" >
                        <span className="info-box-icon"><i style={{ color: "white" }} className="ion ion-ios-cloud-download-outline"></i></span>
                    </a>
                    <div className="info-box-content">
                        <span className="info-box-text">{x.name}</span>
                        <span className="info-box-number">{x.type}</span>

                        <div className="progress">
                            <div className="progress-bar" style={{ width: "100%" }} ></div>
                        </div>
                        <span className="progress-description">
                            {x.expirationDate}
                        </span>
                    </div>
                </div>
            </Grid>
        ))
    }

    renderOsc() {
        const osc = this.state.admProcess.osc || {}

        return (
            <Grid cols='12 12'>
                <div className="box-widget widget-user">
                    <div className="widget-user-header" style={{ height: "65px" }}>
                        <h3 className="widget-user-username">{osc.name}</h3>
                        <h5 className="widget-user-desc"><strong>CNPJ:</strong> {osc.cnpj}</h5>
                    </div>
                    <ul className="nav">
                        <li style={{ margin: '20px' }}><b>Email:</b> {osc.email}</li>
                    </ul>
                </div>
            </Grid>
        )
    }

    render() {
        const { admProcess } = this.state
        return (
            <div className="container-fluid">
                <div className="main" style={{ height: 'auto' }}>
                    <ContentHeader title='Processo Administrativo' />
                    <Content >
                        <Box color='primary'>
                            {this.state.isLoading &&
                                <div className="overlay">
                                    <i className="fa fa-refresh fa-spin"></i>
                                </div>
                            }
                            <BoxBody>
                                <div className="box-widget widget-user">
                                    <div className="widget-user-header" style={{ height: "65px" }}>
                                        <h3 className="widget-user-username">{admProcess.description}</h3>
                                        <h5 className="widget-user-desc">{admProcess.modality} <strong>Nº</strong> {admProcess.modalityNumber}</h5>
                                    </div>
                                    <ul className="nav">
                                        <li style={{ margin: '20px' }}><b>PRTP:</b> {admProcess.prtp}</li>
                                        <li style={{ margin: '20px' }}><b>Objeto:</b> {admProcess.object}</li>
                                        <li style={{ margin: '20px' }}><b>Data de publicação:</b> {admProcess.date}</li>
                                        <li style={{ margin: '20px' }}><b>Dotação orçamentária:</b> R$ {admProcess.budgetAllocation}</li>
                                    </ul>
                                </div>
                            </BoxBody>
                        </Box>
                        <Box color='primary'>
                            <BoxBody>
                                <legend> Documentos </legend>
                                {this.renderdDocuments()}
                            </BoxBody>
                        </Box>

                        {admProcess.osc !== null &&
                            <Box color='primary'>
                                <BoxBody>
                                    <legend> Organização da Sociedade Civil </legend>
                                    {this.renderOsc()}
                                </BoxBody>
                            </Box>
                        }

                    </  Content>
                </div>
            </div>
        )
    }
}

export default AdmProcessDetails;