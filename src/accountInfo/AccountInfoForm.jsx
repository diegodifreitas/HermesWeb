import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './accountInfoActions'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndUpload from '../common/form/LabelAndUpload'

import LabelAndDate from '../common/form/LabelAndDate'

class AccountInfoForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field name='image' component={LabelAndUpload}
                        label='Foto Perfil' cols='12 4 3' placeholder='Adicionar imagem' />

                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4  3' placeholder='...' />

                    <Field name='email' component={LabelAndInput} readOnly={readOnly}
                        label="Email" cols='12 4 3' placeholder='...' />

                    <Field name='office' component={LabelAndInput} readOnly={readOnly}
                        label='Cargo' cols='12 12 3' placeholder='Ex: Av. João de Camargo, 89' />

                    <Field name='publicAdmin' component={LabelAndInput} readOnly={readOnly}
                        label='Administração Pública' cols='12 12 9' placeholder='Vai er uma lista aqui...' />


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