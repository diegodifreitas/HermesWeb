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

    constructor(props) {
        super(props)
        this.update = this.update.bind(this)
        this.create = this.create.bind(this)

    }

    componentWillMount() {
        this.props.selectTab('tabList')
        if (this.props.user.type === 'OSC') {
            this.props.showTabs('tabList')
        } else {
            this.props.showTabs('tabList', 'tabCreate')
        }
    }

    update(formData) {
        const url = "localhost:8084/HS_WEB/storage/download?fileName=" + this.props.file[0].originalName
        this.props.update({ ...formData, urlReferenceTerm: url })
    }

    create(formData) {
        const url = "localhost:8084/HS_WEB/storage/download?fileName=" + this.props.file[0].originalName
        this.props.create({ ...formData, urlReferenceTerm: url })
    }

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
                                    onSubmit={this.create}
                                    submitLabel='Incluir'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form
                                    type={this.props.user.type}
                                    readOnly={this.props.user.type === 'OSC' ? true : false}
                                    onSubmit={this.update}
                                    submitLabel={this.props.user.type === 'OSC' ? 'Voltar' : 'Alterar'}
                                    submitClass='primary' />
                            </TabContent>
                            {this.props.user.type !== 'OSC' &&
                                <TabContent id='tabDelete'>
                                    <Form
                                        type={this.props.user.type}
                                        onSubmit={this.props.remove}
                                        readOnly={true}
                                        submitLabel='Excluir'
                                        submitClass='danger' />
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
    bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)
const mapStateToProps = state => ({ user: state.auth.user, file: state.admProcess.file })

export default connect(mapStateToProps, mapDispatchToProps)(AdmProcess)