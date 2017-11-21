import React, { Component } from 'react'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndCombo from '../common/form/LabelAndCombo'
import LabelAndDate from '../common/form/LabelAndDate'
import LabelAndToggle from '../common/form/LabelAndToggle'
import LabelAndText from '../common/form/LabelAndTextArea'
import Row from '../common/layout/Row'
import Grid from '../common/layout/Grid'

import FileInput from './documents/FileInput'
import DocumentForm from './documents/DocumentsForm'
import OscSelect from './osc/OscSelect'

import validate from './../validate/admProcessValidate'

class AdmProcessForm extends Component {

    render() {
        const { modality, handleSubmit, pristine, reset, submitClass, submitting, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Row>
                        <Field name='prtp' component={LabelAndInput} readOnly={readOnly}
                            label='PRTP' cols='12 3' placeholder='Informe o PRTP' />

                        <Field name='modality' label='Modalidade' cols='12 5'
                            placeholder='Informe a Modalidade' values={[
                                { id: 1, nome: 'Inexigibilidade' },
                                { id: 2, nome: "Chamamento Público" },
                                { id: 3, nome: "Dispensa" }]}
                            component={LabelAndCombo} readOnly={readOnly} />

                        <Field name='modalityNumber' label='Número da Modalidade' cols='12 4'
                            placeholder='Informe o número da Modalidade'
                            component={LabelAndInput} readOnly={readOnly} />

                        <Field name='budgetAllocation' component={LabelAndInput} readOnly={readOnly}
                            label='Dotação Orçamentária' cols='12 4' placeholder='Descreva a dotação orçamentária do processo' />

                        <Field name='date' component={LabelAndDate} label='Data de Publicação'
                            cols='12 4' readOnly={readOnly} placeholder='Informe a data' />

                        <Field name='statusFinished' component={LabelAndToggle} readOnly={readOnly}
                            label='Finalizado' cols='12 4' />

                        <Field name='description' component={LabelAndInput} readOnly={readOnly}
                            label="Descrição Súmaria" cols='12 12' placeholder='Informe a descrição súmaria' />

                        <Field name='object' component={LabelAndText} readOnly={readOnly}
                            label='Objeto' cols='12 12' placeholder='Descreva o objeto do processo' />
                    </Row>
                    <Row>
                        <FieldArray name="documents" component={DocumentForm} />
                    </Row>
                    {(modality === 'Dispensa' || modality === 'Inexigibilidade') &&
                        <Row>
                            <FieldArray name="osc" component={OscSelect} />
                        </Row>
                    }
                </div>
                <div className='box-footer'>
                    <button type='submit' disabled={submitting} className={`btn btn-${submitClass}`}> {this.props.submitLabel} </button>
                    <button type="button" className='btn btn-warning' disabled={pristine || submitting} onClick={reset}> Limpar formulário </button>
                    <button type='button' className='btn btn-default' onClick={() => this.props.init()}> Cancelar </button>
                </div>
            </form>
        )
    }
}

AdmProcessForm = reduxForm({ form: 'admProcessForm', destroyOnUnmount: false, validate })(AdmProcessForm)

const selector = formValueSelector('admProcessForm')
const mapStateToProps = state => ({
    modality: selector(state, 'modality'),
})
export default connect(mapStateToProps, null)(AdmProcessForm)

