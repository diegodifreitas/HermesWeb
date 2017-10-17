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
import List from './DocumentsList'
import Form from './DocumentsForm'
import Api from '../../main/api'

import { init, create, update, remove } from './documentsActions'
import { uploadFile } from '../admProcessActions'

class Documents extends Component {

    constructor(props) {
        super(props)
        this.update = this.update.bind(this)
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentWillMount() {
        this.props.init()
    }

    create(data) {
       console.log(data.file)

       const form = new FormData();
       form.append("files", data.file[0]);
   
       Api.postFile(form)    
        .then( res => {
            let fileInfo = res.data[0]
            const url = fileInfo.originalName
            const contentType = fileInfo.contentType
            const name = data.name
            const type = data.type
            const expirationDate = data.expirationDate
            const admProcess = data.admProcess
            const attachmentList = data.attachmentList

            const document = { name, type, expirationDate,  admProcess, attachmentList, url, contentType }
            console.log(document)

            this.props.create(document)
        })
        .catch( e => console.log(e))
    }

    update(data) {
      /*   const begin = moment(data.beginningOfMandate, 'YYYY/MM/DD').format('DD/MM/YYYY')
        const end = moment(data.endOfMandate, 'YYYY/MM/DD').format('DD/MM/YYYY')

        data = { ...data, beginningOfMandate: begin, endOfMandate: end }
        this.props.update(data, this.props.user.id) */
    }
    delete(data) {
        this.props.remove(data)
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Documentos' />
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
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.create}
                                    submitLabel='Incluir'
                                    submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form
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
    user: state.auth.user
})
export default connect(mapStateToProps, mapDispatchToProps)(Documents)