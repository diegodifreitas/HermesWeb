import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tabs/Tabs'
import TabsHeader from '../common/tabs/TabsHeader'
import TabsContent from '../common/tabs/TabsContent'
import TabHeader from '../common/tabs/TabHeader'
import TabContent from '../common/tabs/TabContent'
import List from './AdmProcessList'
import Form from './AdmProcessForm'

import { selectTab, showTabs } from '../common/tabs/tabActions'
import { create, update, remove } from './admProcessActions'

class AdmProcess extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        if (this.props.auth.user.type === 'OSC') {
            this.props.showTabs('tabList')
        } else {
            this.props.showTabs('tabList', 'tabCreate')
        }
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Processo Administrativo'/>
                <Content >
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form
                                    onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form
                                    onSubmit={this.props.update}
                                    submitLabel='Alterar'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form
                                    onSubmit={this.props.remove}
                                    readOnly={true}
                                    submitLabel='Excluir'
                                    submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)
const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, mapDispatchToProps)(AdmProcess)