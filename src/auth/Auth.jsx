import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from './authActions'
import Row from '../common/layout/Row'
import Grid from '../common/layout/Grid'
import If from '../common/operator/If'
import Messages from '../common/msg/Messages'
import Input from '../common/form/InputAuth'

import '../styles/login-bg.css'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    componentDidMount() {
        const ele = document.getElementById('ipl-progress-indicator')
        window.$('.carousel').carousel();
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
            <div>
                <div className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                        </div>
                        <div className="item">
                        </div>
                        <div className="item">
                        </div>
                    </div>
                </div>
                <div className="login-box">
                    <div className="login-box-body">
                        <div className="login-logo">
                            <svg width="150" className="logo-menu" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350">
                                <path className="logo-h" d="M191.55,152.37v28.7H158.81V152.84s0-25.7-32.74-25.7V232.82s0,26.18,32.74,26.18V213.81h32.74v44.8c31.26,0,31.26-25.61,31.26-25.61V126.66C191.55,126.66,191.55,152.37,191.55,152.37Z" />
                                <path className="wing-left" d="M57.52,113.94c-1.13,4.5-12.07,35.35,22.33,54.75C73,170.11,62.39,166.9,60.25,166c0.33,2.12,4.17,33.32,39.62,37.48a24.5,24.5,0,0,1-18.5,3.8c3.23,5.38,12.48,20.08,34.91,22.67v-86.8C84.33,137,63.72,119,57.52,113.94Z" />
                                <path className="wing-right" d="M291.73,113.94c1.13,4.5,12.07,35.35-22.33,54.75,6.84,1.43,17.47-1.79,19.61-2.68-0.33,2.12-4.17,33.32-39.62,37.48a24.5,24.5,0,0,0,18.5,3.8c-3.23,5.38-12.48,20.08-34.91,22.67v-86.8C264.93,137,285.54,119,291.73,113.94Z" />
                            </svg>
                        </div>
                        <p className="login-box-msg">Insira seus dados para acessar</p>

                        <form id="loginForm" name="loginForm" onSubmit={handleSubmit(v => this.onSubmit(v))}>
                            <Field component={Input} type="input" name="name"
                                placeholder="Nome" icon='user' hide={loginMode} />
                            <Field component={Input} type="email" name="email"
                                placeholder="E-mail" icon='envelope' />
                            <Field component={Input} type="password" name="password"
                                placeholder="Senha" icon='lock' />
                            <Field component={Input} type="password" name="confirm_password"
                                placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                            <Row>
                                <Grid cols="4">
                                    <button type="submit"
                                        className="btn btn-primary btn-block btn-flat">
                                        {loginMode ? 'Entrar' : 'Registrar'}
                                    </button>
                                </Grid>
                            </Row>
                        </form>

                        <br />
                        <a onClick={() => this.changeMode()}>
                            {loginMode ? 'Novo usuário? Registrar aqui!' :
                                'Já é cadastrado? Entrar aqui!'}
                        </a>
                        <Messages />
                    </div>
                </div>
            </div>
        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)