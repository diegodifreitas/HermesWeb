import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './accountInfoActions'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndText from '../common/form/LabelAndText'
import LabelAndCombo from '../common/form/LabelAndCombo'
import DragDropUpload from '../common/widget/DragDropUpload'

import LabelAndDate from '../common/form/LabelAndDate'

class AccountInfoForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>

                    <DragDropUpload />
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='...' />

                    <Field name='email' component={LabelAndInput} readOnly={readOnly}
                        label="Email" cols='12 4' placeholder='...' />

                    <Field name='dataNascimento' component={LabelAndDate} label='Data de Nascimento'
                        cols='12 4' readOnly={readOnly} placeholder='..' type='text' />

                    <Field name='endereco' component={LabelAndInput} readOnly={readOnly}
                        label='Endereço' cols='12 6' placeholder='Ex: Av. João de Camargo, 89' />

                    <Field name='bairro' component={LabelAndInput} label='Bairro'
                        cols='12 3' readOnly={readOnly} placeholder='Informe o bairro da localização da organização' />

                    <Field name='telefone' component={LabelAndInput} label='Telefone'
                        cols='12 3' readOnly={readOnly} placeholder='Informe um número de telefone' />

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </div>
            </form>
        )
    }
}

AccountInfoForm = reduxForm({ form: 'accountInfoForm', destroyOnUnmount: false })(AccountInfoForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(AccountInfoForm)