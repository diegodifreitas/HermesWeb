import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './userManagementActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndDate from '../common/form/LabelAndDate'

class UserManagementForm extends Component {
    componentWillMount() {
    }

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <BoxBody>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label='Nome da Organização' cols='12 12' placeholder='Informe o Nome da Organização' />

                    <Field name='email' component={LabelAndInput} label='Email'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um email para a organização' type='email' />

                    <Field name='endereco' component={LabelAndInput} readOnly={readOnly}
                        label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                    <Field name='bairro' component={LabelAndInput} label='Bairro'
                        cols='12 3' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                    <Field name='telefone' component={LabelAndInput} label='Telefone'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />
                </BoxBody>

                <BoxFooter >
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </BoxFooter>
            </form>
        )
    }
}

UserManagementForm = reduxForm({ form: 'usersForm', destroyOnUnmount: false })(UserManagementForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementForm)