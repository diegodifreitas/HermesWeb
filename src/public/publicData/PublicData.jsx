import React, { Component } from 'react'
import { toastr } from 'react-redux-toastr'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'
import Box from '../../common/template/box/Box'
import BoxHeader from '../../common/template/box/BoxHeader'
import BoxBody from '../../common/template/box/BoxBody'

import Api from '../../main/api'

import AdmProcessList from './AdmProcessList'

class PublicData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            list: [],
            text: ''
        }
    }

    componentWillMount() {
        this.setState({ ...this.state, isLoading: true })
        Api.getAdmProcess()
            .then(res => {
                this.setState({ ...this.state, text: '', list: res.data, isLoading: false })
            })
            .catch(e => {
                toastr.error('Erro', 'Não foi acessar o servidor!')
                this.setState({ ...this.state, text: '', isLoading: false })
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="main">
                    <ContentHeader title='Dados Publicos' />
                    <Content >
                        <Box color='primary direct-chat direct-chat-primary'>
                            {this.state.isLoading &&
                                <div className="overlay">
                                    <i className="fa fa-refresh fa-spin"></i>
                                </div>
                            }
                            <BoxHeader title='Processo Administrativo' />
                            <BoxBody>
                                <AdmProcessList list={this.state.list} />
                            </BoxBody>
                        </Box>
                    </  Content>
                </div>
            </div>
        )
    }
}

export default PublicData