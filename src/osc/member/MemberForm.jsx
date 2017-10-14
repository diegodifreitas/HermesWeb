import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BoxBody from '../../common/template/box/BoxBody'
import BoxFooter from '../../common/template/box/BoxFooter'
import LabelAndInput from '../../common/form/LabelAndInput'
import LabelAndDate from '../../common/form/LabelAndDate'
import LabelAndToggle from '../../common/form/LabelAndToggle'

import { update, init, close } from './memberActions'

import { validate } from '../../validate/memberFormValidate'

class MemberForm extends Component {

    render() {
        const { readOnly, user, member, close, update, init } = this.props
        return (

            <form>
                <BoxBody>

                    <Field name='responsible' component={LabelAndToggle} readOnly={readOnly}
                        label='Responsável' cols='12 2' />

                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 10' placeholder='Informe um Nome*' />

                    <Field name='email' component={LabelAndInput} type="email" label='Email'
                        cols='12 6' readOnly={readOnly} placeholder='Informe um email*' />

                    <Field name='phone' component={LabelAndInput} label='Telefone'
                        cols='12 6' readOnly={readOnly} placeholder='Informe um número de telefone' />

                    <Field name='cpf' component={LabelAndInput} label='CPF'
                        cols='12 6' readOnly={readOnly} placeholder='Ex. 126.845.658-61' />

                    <Field name='rg' component={LabelAndInput} label='RG'
                        cols='12 6' readOnly={readOnly} placeholder='Ex. 15.754.580' />

                    <Field name='office' component={LabelAndInput} label='Cargo'
                        cols='12 4' readOnly={readOnly} placeholder='Qual seu cargo?' />

                    <Field name='beginningOfMandate' component={LabelAndDate} label='Início do Mandato'
                        cols='12 4' readOnly={readOnly} placeholder='Informe a data de início do mandato' type='text' />

                    <Field name='endOfMandate' component={LabelAndDate} label='Término do Mandato'
                        cols='12 4' readOnly={readOnly} placeholder='Informe a data de término do mandato' type='text' />

                </BoxBody>
                <BoxBody>
                    <fieldset>
                        <legend> Localização </legend>
                        <Field name='address.street' component={LabelAndInput} readOnly={readOnly}
                            label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                        <Field name='address.number' component={LabelAndInput} readOnly={readOnly}
                            label='Número' cols='12 6' placeholder='Ex: 456' />

                        <Field name='address.neighborhood' component={LabelAndInput} label='Bairro'
                            cols='12 6' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                        <Field name='address.city' component={LabelAndInput} readOnly={readOnly}
                            label='Cidade' cols='12 6' placeholder='Ex: Av. Santa Rita do Sapucai - MG' />
                    </fieldset>
                </BoxBody>

                <BoxFooter >
                    {this.props.user.type === 'OSC' &&
                        <span>
                            <button type='submit'
                                onClick={(e) => {
                                    e.preventDefault()
                                    update(member, user.id)
                                }}
                                className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                            <button type='button' className='btn btn-default' onClick={() => init(user.id)}> Cancelar </button>
                        </span>
                    }

                    {this.props.user.type !== 'OSC' &&
                        <button type='button' className='btn btn-default' onClick={close}> Voltar </button>
                    }
                </BoxFooter>
            </form >

        )
    }
}

MemberForm = reduxForm({
    form: 'memberForm',
    validate,
    destroyOnUnmount: false
})(MemberForm)
const mapStateToProps = state => ({
    user: state.auth.user,
    member: state.form.memberForm.values
})
const mapDispatchToProps = dispatch => bindActionCreators({ update, init, close }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MemberForm)