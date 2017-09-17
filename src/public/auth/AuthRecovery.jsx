import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import Toastr from '../../common/ui/Toastr'
import Input from '../../common/form/InputAuth'

import PanelLeft from '../PanelLeft'

const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
}


class AuthRecovery extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        //logic
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (

            <div className="container-fluid">
                <div className="main">
                    <PanelLeft link='/login' label='Entrar' />

                    <div className="col-sm-6 right-side">
                        <h1>Recuperar Senha</h1>
                        <p>Informa seu email abaixo</p>
                        <div className="form">
                            <form id="recoveryForm" name="recoveryForm" onSubmit={handleSubmit(v => this.onSubmit(v))}>
                                <Field component={Input} type="email" name="email"
                                    placeholder="E-mail" icon='envelope' />
                                <button type="submit"
                                    className="btn btn-success">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                    <Toastr />
                </div>
            </div>
        )
    }
}

AuthRecovery = reduxForm({ form: 'authForm', validate })(AuthRecovery)
export default AuthRecovery