import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { bindActionCreators } from 'redux'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'
import Box from '../../common/template/box/Box'
import BoxHeader from '../../common/template/box/BoxHeader'
import BoxBody from '../../common/template/box/BoxBody'

import Tabs from '../../common/tabs/Tabs'
import TabsHeader from '../../common/tabs/TabsHeader'
import TabsContent from '../../common/tabs/TabsContent'
import TabHeader from '../../common/tabs/TabHeader'
import TabContent from '../../common/tabs/TabContent'

import Api from '../../main/api'

import { showTabs, selectTab } from '../../common/tabs/tabActions'

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
        this.props.showTabs('tabPublico', 'tabInexibilidade', 'tabDispensa');
        this.props.selectTab('tabPublico');

        this.setState({ ...this.state, isLoading: true })
        Api.getAdmProcess()
            .then(res => {
                this.setState({ ...this.state, text: '', list: res.data.content, isLoading: false })
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
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='Chamamento Público' icon='list-ul' target='tabPublico' />
                                <TabHeader label='Inexibilidade' icon='list-ul' target='tabInexibilidade' />
                                <TabHeader label='Dispensa' icon='list-ul' target='tabDispensa' />
                            </TabsHeader>
                            <TabsContent>
                                <TabContent id='tabPublico'>
                                    <AdmProcessList modality='Chamamento Público' list={
                                        this.state.list.filter(x => x.modality === 'Chamamento Público')
                                    } />
                                </TabContent>
                                <TabContent id='tabInexibilidade'>
                                    <AdmProcessList modality='Inexigibilidade' list={
                                        this.state.list.filter(x => x.modality === 'Inexigibilidade')
                                            .sort((a, b) => a.name < b.name ? 0 : 1)
                                    } />
                                </TabContent>
                                <TabContent id='tabDispensa'>
                                    <AdmProcessList modality='Dispensa' list={
                                        this.state.list.filter(x => x.modality === 'Dispensa')
                                            .sort((a, b) => a.name < b.name ? 0 : 1)} />
                                </TabContent>
                            </TabsContent>
                        </Tabs>

                        {/*  <Box color='primary direct-chat direct-chat-primary'>
                            {this.state.isLoading &&
                                <div className="overlay">
                                    <i className="fa fa-refresh fa-spin"></i>
                                </div>
                            }
                        </Box> */}
                    </  Content>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ showTabs, selectTab }, dispatch)
export default connect(null, mapDispatchToProps)(PublicData)