import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'
import Tabs from '../../common/tabs/Tabs'
import TabsHeader from '../../common/tabs/TabsHeader'
import TabsContent from '../../common/tabs/TabsContent'
import TabHeader from '../../common/tabs/TabHeader'
import TabContent from '../../common/tabs/TabContent'
import List from './MemberList'
import Form from './MemberForm'

import { init, create, update, remove } from './memberActions'

class Member extends Component {

    constructor(props) {
        super(props)
        this.update = this.update.bind(this)
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentWillMount() {
        this.props.init(this.props.user.id)
    }

    create(data) {
        this.props.create(data, this.props.user.id)
    }
    update(data) {
        const begin = moment(data.beginningOfMandate, 'YYYY/MM/DD').format('DD/MM/YYYY')
        const end = moment(data.endOfMandate, 'YYYY/MM/DD').format('DD/MM/YYYY')

        data = { ...data, beginningOfMandate: begin, endOfMandate: end }
        this.props.update(data, this.props.user.id)
    }
    delete(data) {
        this.props.remove(data, this.props.user.id)
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Membros' />
                <Content >
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            {this.props.user.type !== 'OSC' &&
                                <TabHeader label='Detalhes' icon='address-book-o' target='tabUpdate' />
                            }
                            {this.props.user.type === 'OSC' &&
                                <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            }
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List list={this.props.list} />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.create}
                                    submitLabel='Incluir'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form
                                    readOnly={this.props.user.type === 'OSC' ? false : true}
                                    onSubmit={this.update}
                                    submitLabel='Alterar'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form
                                    onSubmit={this.delete}
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
    bindActionCreators({ init, create, update, remove }, dispatch)
const mapStateToProps = state => ({
    user: state.auth.user,
    list: state.member.payload.payload
})
export default connect(mapStateToProps, mapDispatchToProps)(Member)