import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './registerActions'
import LabelAndInput from '../common/form/LabelAndInput'
import BoxBody from '../common/template/box/BoxBody'

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Campo obrigatório'
    }
    if (!values.password) {
        errors.password = 'Campo obrigatório'
    }
    if (!values.cnpj) {
        errors.cnpj = 'Campo obrigatório'
    }
    if (!values.email) {
        errors.email = 'Campo obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
    if (!values.phone) {
        errors.phone = 'Campo obrigatório'
    } else if (!/^(\(11\) [0-9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$/i.test(values.phone)) {
        errors.phone = 'Telefone inválido'
    }
    return errors
}

class OSCForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <div className='form'>
                <BoxBody>
                    <fieldset>
                        <legend> Dados de acesso </legend>
                        <Field name='name' component={LabelAndInput} readOnly={readOnly}
                            label='Nome da Organização' cols='12 6' placeholder='Informe o Nome da Organização' />

                        <Field name='cnpj' component={LabelAndInput} readOnly={readOnly}
                            label='CNPJ' cols='12 3' placeholder='Ex. 94.980.684/0001-89' />

                        <Field name='email' component={LabelAndInput} label='Email'
                            cols='12 3' readOnly={readOnly} placeholder='Informe um email para a organização' type='email' />

                        <Field name='password' component={LabelAndInput} label='Senha'
                            cols='12 4' type='password' readOnly={readOnly} placeholder='Informe uma senha' />

                        <Field name='phone' component={LabelAndInput} label='Telefone'
                            cols='12 4' readOnly={readOnly} placeholder='Ex. (35) 9766-0281' />

                        <Field name='registrationCM' component={LabelAndInput} label='Conselho Municipal'
                            cols='12 4' readOnly={readOnly} placeholder='Ex. 13-5436' />
                    </fieldset>
                </BoxBody>
                <BoxBody>
                    <fieldset>
                        <legend> Localização </legend>
                        <Field name='address.street' component={LabelAndInput} readOnly={readOnly}
                            label='Endereço' cols='12 3' placeholder='Ex: Av. João de Camargo, 89' />

                        <Field name='address.number' component={LabelAndInput} readOnly={readOnly}
                            label='Numero' cols='12 3' placeholder='Ex: 456' />

                        <Field name='address.neighborhood' component={LabelAndInput} label='Bairro'
                            cols='12 3' readOnly={readOnly} placeholder='Ex. Centro' />

                        <Field name='address.city' component={LabelAndInput} readOnly={readOnly}
                            label='Município' cols='12 3' placeholder='Ex: Santa Rita do Sapucai - MG' />
                    </fieldset>
                </BoxBody>
            </div>
        )
    }
}

OSCForm = reduxForm({
    form: 'oscForm', validate, destroyOnUnmount: false,
    initialValues: {
        approvalADM: false,
        approvalPS: false
    }
})(OSCForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OSCForm)