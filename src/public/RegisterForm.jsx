import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import OscForm from '../osc/OscForm'
import { validate } from '../validate/oscFormValidate'

class RegisterForm extends Component {   

    render() {
        const { handleSubmit } = this.props
        return (
            <form id="oscForm" onSubmit={handleSubmit} name="oscForm" className='form'>
                <OscForm />
                <button type='submit' className='btn btn-primary'> Solicitar Acesso </button>
            </form>
        )
    }
}

RegisterForm = reduxForm({
    form: 'oscForm', validate, destroyOnUnmount: false,
    initialValues: {
        approvalADM: false,
        approvalPS: false
    }
})(RegisterForm)

export default RegisterForm