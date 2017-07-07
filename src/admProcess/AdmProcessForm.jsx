import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class AdmProcessForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit= { handleSubmit }>
                <div className='box-body'>
                    <Field name='prtp' component='input'/>
                    <Field name='modalidade' component='input'/>
                    <Field name='descricaoSumaria' component='input'/>
                    <Field name='pendencias' component='input'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'> Submit </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'admProcessForm'})(AdmProcessForm)