import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import OscForm from '../osc/OscForm'
import { create } from './registerActions'
import Toastr from '../common/ui/Toastr'

import PanelLeft from './PanelLeft'
import { validate } from '../validate/oscFormValidate'

import './register.css'
class Register extends Component {

    render() {
        const { create } = this.props
        return (
            <div className="container-fluid">
                <div className="main">
                    <PanelLeft link='/login' label='Entrar' />
                    <div className="col-sm-6 right-side">
                        <form id="oscForm" name="oscForm" onSubmit={create(values => console.log("========>", values))} className='form'>
                            <OscForm />
                            <button type='submit' className='btn btn-primary'> Solicitar Acesso </button>
                        </form>
                    </div>
                    <Toastr />
                </div>
            </div>
        )
    }
}

Register = reduxForm({
    form: 'oscForm', validate, destroyOnUnmount: false,
    initialValues: {
        approvalADM: false,
        approvalPS: false
    }
})(Register)

const mapDispatchToProps = dispatch =>
    bindActionCreators({ create }, dispatch)
export default connect(null, mapDispatchToProps)(Register)