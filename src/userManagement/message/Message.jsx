import React, { Component } from 'react'

import MessageForm from './MessageForm'
import MessageList from './MessageList'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'

import Api from '../../main/api'

class Message extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            list: [],
            message: {}
        }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    componentWillMount() {
        this.refresh()
    }

    handleAdd() {
        const message = { message: this.state.message, done: false }
        Api.postMessage(message)
            .then(res => this.refresh())
    }

    handleRemove(todo) {
        Api.deleteMessage(todo)
            .then(res => this.refresh(this.state.message))
    }

    handleChange(e) {
        this.setState({ ...this.state, message: e.target.value })
    }

    handleSearch() {
        this.refresh(this.state.message)
    }

    handleClear() {
        this.refresh()
    }

    refresh(message = '') {
        this.setState({ isLoading: true })
        const search = message ? `?q=${message}` : ''
        Api.getMessage(search)
            .then(res => {
                this.setState({ ...this.state, message, list: res.data })
            })
    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Mensagens' small='1.0' />
                <Content >
                    <MessageList
                        list={this.state.list}
                        handleRemove={this.handleRemove} />
                    <MessageForm
                        message={this.state.message}
                        handleAdd={this.handleAdd}
                        handleChange={this.handleChange}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear} />
                </Content>
            </div>
        )
    }
}

export default Message