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

import Form from './PublicAdmForm'

import { update, init, getPublicAdmById } from './publicAdmActions'


const mapDispatchToProps = dispatch =>
    bindActionCreators({ update, init, getPublicAdmById }, dispatch)
const mapStateToProps = state => ({ user: state.auth.user })

class PublicAdm extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.init(this.props.user)
        this.props.getPublicAdmById(1)
    }

    render() {
        return (
            <div className=''>
                <ContentHeader routes={this.props.match} title='Administração Pública' />
                <Content >
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Atualizar informações' icon='bars' target='tabList' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <Form
                                    onSubmit={this.props.update}
                                    submitLabel='Atualizar'
                                    submitClass='primary'
                                    user={this.props.user} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicAdm)
