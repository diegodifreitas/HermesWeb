import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { login, signup } from './authActions'
import Row from '../common/layout/Row'
import Grid from '../common/layout/Grid'
import Toastr from '../common/ui/Toastr'
import Input from '../common/form/InputAuth'

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
                setTimeout(() => {
                    ele.outerHTML = ''
                }, 2000)
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
                    <div className="col-sm-6 left-side">
                        <svg width="150" className="logo-menu" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
                            <path className="logo-h" d="M191.55,152.37v28.7H158.81V152.84s0-25.7-32.74-25.7V232.82s0,26.18,32.74,26.18V213.81h32.74v44.8c31.26,0,31.26-25.61,31.26-25.61V126.66C191.55,126.66,191.55,152.37,191.55,152.37Z" />
                            <path className="wing-left" d="M57.52,113.94c-1.13,4.5-12.07,35.35,22.33,54.75C73,170.11,62.39,166.9,60.25,166c0.33,2.12,4.17,33.32,39.62,37.48a24.5,24.5,0,0,1-18.5,3.8c3.23,5.38,12.48,20.08,34.91,22.67v-86.8C84.33,137,63.72,119,57.52,113.94Z" />
                            <path className="wing-right" d="M291.73,113.94c1.13,4.5,12.07,35.35-22.33,54.75,6.84,1.43,17.47-1.79,19.61-2.68-0.33,2.12-4.17,33.32-39.62,37.48a24.5,24.5,0,0,0,18.5,3.8c-3.23,5.38-12.48,20.08-34.91,22.67v-86.8C264.93,137,285.54,119,291.73,113.94Z" />
                        </svg>
                        <h1><b>HERMES</b><br /></h1>
                        <p>Sistema de software para gestão de parcerias entre a administração pública e as organizações da sociedade civil.</p>
                        <br />
                        <Link to='/singup' className="btn btn-primary">Solicitar acesso</Link>
                        <Link to='/publicdata' className="btn btn-success" >Dados Públicos</Link>
                    </div>

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