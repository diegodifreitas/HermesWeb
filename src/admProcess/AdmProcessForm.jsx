import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './admProcessActions'
import LabelAndInput from '../common/form/LabelAndInput'

class AdmProcessForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='prtp' component={LabelAndInput} readOnly={readOnly}
                        label='PRTP' cols='12 2' placeholder='Informe o PRTP' />
                    <Field name='descricaoSumaria' component={LabelAndInput} readOnly={readOnly}
                        label='Descricão Súmaria' cols='12 10' placeholder='Informe a descrição súmaria' />
                    <Field name='modalidade' component={LabelAndInput} readOnly={readOnly}
                        label='Modalidade' cols='12 6' placeholder='Informe a modalidade' />
                    <Field name='pendencias' component={LabelAndInput} readOnly={readOnly}
                        label='Pêndencias' cols='12 6' placeholder='Informe se o processo possui pendências' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </div>
            </form>
        )
    }
}

AdmProcessForm = reduxForm({ form: 'admProcessForm', destroyOnUnmount: false })(AdmProcessForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch) 
export default connect(null, mapDispatchToProps)(AdmProcessForm)