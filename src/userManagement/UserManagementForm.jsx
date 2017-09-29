import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './userManagementActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndCombo from '../common/form/LabelAndCombo'
import LabelAndUpload from '../common/form/LabelAndUpload'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Campo obrigatório'
    }
    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
    if (!values.phone) {
        errors.phone = 'Campo obrigatório'
    } else if (Number(values.phone) < 6) {
        errors.phone = 'Telefone inválido'
    }
    return errors
}

class UserManagementForm extends Component {
    componentWillMount() {
    }

    render() {
        const { handleSubmit, readOnly, pristine, reset, submitting } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <BoxBody>

                    <Field name='image' component={LabelAndUpload}
                        label='Foto' cols='12 3 3' placeholder='Adicionar imagem' />

                    <Field name='type' component={LabelAndCombo} label='Tipo'
                        cols='12 3' readOnly={readOnly} placeholder='Informe o tipo do usuario'
                        values={[
                            { id: 1, value: "PUBLIC-SERVER", nome: "Servidor Público" },
                            { id: 2, value: "ADMINISTRATOR", nome: "Administrador" },
                            { id: 3, value: "OSC", nome: "OSC" }
                        ]} />

                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 3' placeholder='Informe um Nome*' />

                    <Field name='email' component={LabelAndInput} type="email" label='Email'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um email*' />

                    <Field name='password' component={LabelAndInput} type="password" label='Senha'
                        cols='12 3' readOnly={readOnly} placeholder='Informe uma senha*' />

                    {this.props.typeValue !== undefined &&
                        <div>
                            {this.props.typeValue === 'PUBLIC-SERVER' &&
                                <Field name='office' component={LabelAndInput} label='Cargo'
                                    cols='12 3' readOnly={readOnly} placeholder='Informe seu cargo' />
                            }

                            {this.props.typeValue !== 'ADMINISTRATOR' && this.props.typeValue !== 'PUBLIC-SERVER' &&
                                <div>
                                    <Field name='phone' component={LabelAndInput} label='Telefone'
                                        cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />

                                    <Field name='street' component={LabelAndInput} readOnly={readOnly}
                                        label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                                    <Field name='neighborhood' component={LabelAndInput} label='Bairro'
                                        cols='12 3' readOnly={readOnly} placeholder='Informe o bairro' />

                                    <Field name='city' component={LabelAndInput} label='Cidade'
                                        cols='12 3' readOnly={readOnly} placeholder='Informe a cidade' />
                                </div>
                            }
                        </div>
                    }


                </BoxBody>

                <BoxFooter >
                    <button type='submit' disabled={submitting} className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-warning' disabled={pristine || submitting} onClick={reset}> Limpar </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </BoxFooter>
            </form>
        )
    }
}

UserManagementForm = reduxForm({
    form: 'usersForm',
    validate, // <--- validation function given to redux-form
    destroyOnUnmount: false,
    initialValues: {
        approvalADM: true,
        approvalPS: true
    }
})(UserManagementForm)
const mapStateToProps = state => {
    const selector = formValueSelector('usersForm')
    const typeValue = selector(state, 'type');
    return ({
        typeValue
    })
}
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementForm)