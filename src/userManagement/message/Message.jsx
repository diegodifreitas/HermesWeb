import React, { Component } from 'react'
import { toastr } from 'react-redux-toastr'

import MessageForm from './MessageForm'
import MessageList from './MessageList'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'
import Box from '../../common/template/box/Box'
import BoxHeader from '../../common/template/box/BoxHeader'
import BoxBody from '../../common/template/box/BoxBody'
import BoxFooter from '../../common/template/box/BoxFooter'


import Api from '../../main/api'

class Message extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            list: [],
            text: ''
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.refresh()
    }

    handleAdd() {
        this.setState({ isLoading: true })
        const message = {
            text: this.state.text,
            user: {
                photo: "https://avatars3.githubusercontent.com/u/11650796?v=4&s=460",
                name: "Usuario #X",
                id: 2,
            },
            datetime: Date.now(),
        }
        Api.postMessage(message)
            .then(res => {
                toastr.success('Ok!', 'Mensagem envida com sucesso!')
                this.refresh()
            })
            .catch(e => {
                //alterar isso quando integrar com a API
                toastr.error('Erro', 'Não foi possivél salvar a mensagem!')
                //e.response.data.errors.forEach( error => toastr.error('Erro', error))           
            })
    }

    handleClear() {
        this.setState({ ...this.state, text: '' })
    }

    handleChange(e) {
        this.setState({ ...this.state, text: e.target.value })
    }

    refresh() {
        this.setState({ ...this.state, isLoading: true })
        Api.getMessage()
            .then(res => {
                this.setState({ ...this.state, text: '', list: res.data, isLoading: false })
            })
            .catch(e => {
                toastr.error('Erro', 'Não foi acessar o servidor!')
                this.setState({ ...this.state, text: '', isLoading: false })
            })
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Nome do Usuario' small='1.0' />
                <Content >
                    <Box color='primary direct-chat direct-chat-primary'>
                        {this.state.isLoading &&
                            <div className="overlay">
                                <i className="fa fa-refresh fa-spin"></i>
                            </div>
                        }
                        <BoxHeader title='Mensagens' />
                        <BoxBody>
                            <MessageList list={this.state.list} />
                        </BoxBody>
                        <BoxFooter>
                            <MessageForm
                                text={this.state.text}
                                handleAdd={this.handleAdd}
                                handleClear={this.handleClear}
                                handleChange={this.handleChange}
                            />
                        </BoxFooter>
                    </Box>
                </  Content>
            </div>
        )
    }
}

export default Message