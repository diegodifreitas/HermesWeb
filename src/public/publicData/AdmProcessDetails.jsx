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
                console.log(res.data)
                this.setState({ ...this.state, admProcess: res.data, isLoading: false })
            })
            .catch(e => {
                toastr.error('Erro', 'Não foi acessar o servidor!')
                this.setState({ ...this.state, isLoading: false })
            })
    }

    renderdDocuments() {
        const list = this.state.admProcess.documents|| []
        return list.map(x => (

            <Grid cols='6 4' >
                <div className="box box-widget widget-user">
                    <div className="widget-user-header bg-aqua">
                        <h3 className="widget-user-username"> {x.name} </h3>
                        <h5 className="widget-user-desc"> {x.type} </h5>
                    </div>
                    <div className="widget-user-image">
                        <a href={`${consts.API_URL}/storage/download?fileName=` + x.url} target="_blank" classNameName="btn btn-app" >
                            <img className="img" style={{ width: "90px" }} src="http://www.iconarchive.com/download/i65471/icojam/blue-bits/document-arrow-down.ico" alt="User Avatar" />
                        </a>
                    </div>
                    <div className="box-footer">
                        <div className="row">
                            <div className="col-sm-12 border-right">
                                <div className="description-block">
                                    <h5 className="description-header">{moment(x.expirationDate, 'YYYY/MM/DD').format('DD/MM/YYYY')}</h5>
                                    <span className="description-text">Data de Expiração</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
        ))
    }

    render() {
        const { admProcess } = this.state
        return (
            <div className="container-fluid">
                <div className="main" style={{ height: 'auto' }}>
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
                                    <div className="widget-user-header bg-aqua">
                                        <div className="widget-user-image">
                                            <a href={`${consts.API_URL}/storage/download?fileName=` + admProcess.nameReferenceTerm} target="_blank" classNameName="btn btn-app" >
                                                <img className="img" style={{ width: "65px", height: 'auto', float: 'left' }} src="http://www.iconarchive.com/download/i65471/icojam/blue-bits/document-arrow-down.ico" alt="User Avatar" />
                                            </a>
                                        </div>
                                        <h3 className="widget-user-username">{admProcess.modality}  &nbsp; <b>nº:</b> {admProcess.modalityNumber} </h3>
                                        <h5 className="widget-user-desc">{admProcess.description}</h5>
                                    </div>
                                </div>
                                <ul className="nav nav-stacked">
                                    <li style={{ margin: '20px' }}><b>PRTP:</b> {admProcess.prtp}</li>
                                    <li style={{ margin: '20px' }}><b>Objeto:</b> {admProcess.object}</li>
                                    <li style={{ margin: '20px' }}><b>Data de publicação:</b> {admProcess.date}</li>
                                    <li style={{ margin: '20px' }}><b>Dotação orçamentária:</b> R$ {admProcess.budgetAllocation}</li>
                                </ul>

                                <fieldset>
                                    <legend> Documentos </legend>
                                    {this.renderdDocuments()}
                                </fieldset>

                            </BoxBody>
                        </Box>
                    </  Content>
                </div>
            </div>
        )
    }
}

export default AdmProcessDetails;