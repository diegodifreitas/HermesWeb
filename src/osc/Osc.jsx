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
import List from './OscList'
import Form from './OscFormWithMemberList'

import { init, create, update, remove } from './oscActions'

class Osc extends Component {

    componentWillMount() {
        this.props.init(false)
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Organizações da Sociedade Civil' />
                <Content >
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            {this.props.user.type === 'ADMINISTRATOR' &&
                                <TabHeader label='Detalhes' icon='address-book-o' target='tabUpdate' />
                            }
                            {this.props.user.type !== 'ADMINISTRATOR' &&
                                <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            }
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form
                                    onSubmit={this.props.update}
                                    submitLabel='Alterar'
                                    readOnly={this.props.user.type !== 'OSC' ? true : false}
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form
                                    onSubmit={this.props.remove}
                                    readOnly={true}
                                    submitLabel='Excluir'
                                    showSubmit={true}
                                    submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        user: state.auth.user
    })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Osc)