import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import LabelAndInput from '../common/form/LabelAndInput'

class AdmProcessForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='prtp' component={LabelAndInput}
                        label='PRTP' cols='12 4' placeholder='Informe o PRTP' />
                    <Field name='descricaoSumaria' component={LabelAndInput}
                        label='Descricão Súmaria' cols='12 8' placeholder='Informe a descrição súmaria' />
                    <Field name='modalidade' component={LabelAndInput}
                        label='Modalidade' cols='12 6' placeholder='Informe a modalidade' />
                    <Field name='pendencias' component={LabelAndInput}
                        label='Pêndencias' cols='12 6' placeholder='Informe se o processo possui pendências' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'> Submit </button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'admProcessForm' })(AdmProcessForm)