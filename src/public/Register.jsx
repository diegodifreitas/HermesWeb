import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RegisterForm from './RegisterForm'

import { create } from './registerActions'
import Toastr from '../common/ui/Toastr'
import PanelLeft from './PanelLeft'

import './register.css'
class Register extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(v) {
        this.props.create(v)
        console.log(v)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="main">
                    <PanelLeft link='/login' label='Entrar' />
                    <div className="col-sm-6 right-side">
                        <RegisterForm onSubmit={this.handleSubmit} />
                    </div>
                    <Toastr />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ create }, dispatch)
export default connect(null, mapDispatchToProps)(Register)