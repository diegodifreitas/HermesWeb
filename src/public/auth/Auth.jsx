import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { login, signup } from './authActions'
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
    if (!values.password) {
        errors.password = 'Campo obrigatório'
        return errors
    }
}


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    componentDidMount() {
        const ele = document.getElementById('ipl-progress-indicator')
        if (ele) {
            setTimeout(() => {
                ele.classList.add('available')
            }, 1000)
        }
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }

    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (

            <div className="container-fluid">
                <div className="main">
                    <PanelLeft link='/singup' label='Solicitar Acesso' />

                    <div className="col-sm-6 right-side">
                        <h1>Entrar</h1>
                        <p>Entre com seu email e senha para acessar o seu painel administrativo.</p>
                        <div className="form">
                            <form id="loginForm" name="loginForm" onSubmit={handleSubmit(v => this.onSubmit(v))}>
                                <Field component={Input} type="email" name="email"
                                    placeholder="E-mail" icon='envelope' />
                                <Field component={Input} type="password" name="password"
                                    placeholder="Senha" icon='lock' />

                                <button type="submit"
                                    className="btn btn-success">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>

                            </form>
                        </div>
                        <br />
                        <p><Link to={'/recovery'}>Esqueci minha senha. </Link></p>
                    </div>
                    <Toastr />
                </div>
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm', validate })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)