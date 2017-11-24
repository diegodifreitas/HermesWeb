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
        const { isFetching } = this.props
        return (
            <div className="container-fluid">

                <div className="main">
                    <PanelLeft link='/login' label='Entrar' />
                    <div className="col-sm-6 right-side">
                        {
                            !isFetching &&
                            <RegisterForm onSubmit={this.handleSubmit} />
                        }
                        {
                            isFetching &&
                            <div className="overlay">
                                <i className="fa fa-refresh fa-spin"></i>
                            </div>
                        }
                    </div>
                    <Toastr />
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ create }, dispatch)

const mapStateToProps = state => ({
    isFetching: state.osc.isFetching
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)