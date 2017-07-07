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
import { create } from './admProcessActions'

class AdmProcess extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Processo Administrativo' small='Cadastro' />
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
                                <Form onSubmit= {this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'> <h1> Alterar </h1></TabContent>
                            <TabContent id='tabDelete'> <h1> Delete </h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => 
    bindActionCreators({ selectTab, showTabs, create }, dispatch)
export default connect(null, mapDispatchToProps)(AdmProcess)