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
import { create, update, remove, init } from './admProcessActions'

class AdmProcess extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.selectTab('tabList')
        if (this.props.user.type === 'OSC') {
            this.props.showTabs('tabList')
        } else {
            this.props.showTabs('tabList', 'tabCreate')
        }
    }

    // const url = this.props.file[0].originalName

    render() {
        return (
            <div className=''>
                <ContentHeader title='Processo Administrativo' />
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
                                <List type={this.props.user.type} />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form
                                    type={this.props.user.type}
                                    onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary'
                                    init={this.props.init} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form
                                    type={this.props.user.type}
                                    readOnly={this.props.user.type === 'OSC' ? true : false}
                                    onSubmit={this.props.update}
                                    submitLabel={this.props.user.type === 'OSC' ? 'Voltar' : 'Alterar'}
                                    submitClass='primary'
                                    init={this.props.init} />
                            </TabContent>
                            {this.props.user.type !== 'OSC' &&
                                <TabContent id='tabDelete'>
                                    <Form
                                        type={this.props.user.type}
                                        onSubmit={this.props.remove}
                                        readOnly={true}
                                        submitLabel='Excluir'
                                        submitClass='danger'
                                        init={this.props.init} />
                                </TabContent>
                            }
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectTab, showTabs, create, update, remove, init }, dispatch)
const mapStateToProps = state => ({
    user: state.auth.user,
    list: state.admProcess.list,
    totalPage: state.admProcess.totalPage,
    last: state.admProcess.last,
    first: state.admProcess.first,
    numberOfElements: state.admProcess.numberOfElements,
    file: state.admProcess.file
})

export default connect(mapStateToProps, mapDispatchToProps)(AdmProcess)