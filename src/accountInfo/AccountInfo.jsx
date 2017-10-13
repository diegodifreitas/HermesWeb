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

import Form from './AccountInfoForm'

import { selectTab, showTabs } from '../common/tabs/tabActions'
import { updateOsc, updateAdm, updatePublicServer, init } from './accountInfoActions'

class AccountInfo extends Component {
    constructor(props) {
        super(props)
        this.update = this.update.bind(this)
    }
    componentWillMount() {
        this.props.init(this.props.user)
    }

    update(formData) {
        const { updateOsc, updateAdm, updatePublicServer } = this.props
        if (formData.type === 'OSC')
            updateOsc(formData)
        if (formData.type === 'PUBLIC-SERVER')
            updatePublicServer(formData)
        if (formData.type === 'ADMINISTRATOR')
            updateAdm(formData)
    }


    render() {
        return (
            <div className=''>
                <ContentHeader routes={this.props.match} title='Informações da Conta' />
                <Content >
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Meus dados' icon='bars' target='tabList' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <Form
                                    onSubmit={this.update}
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

const mapDispatchToProps = dispatch =>
    bindActionCreators({ updateOsc, updateAdm, updatePublicServer, init }, dispatch)
const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo)
