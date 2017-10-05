import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './admProcessActions'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndText from '../common/form/LabelAndText'
import LabelAndCombo from '../common/form/LabelAndCombo'
import LabelAndDate from '../common/form/LabelAndDate'
import FileUpload from '../common/form/LabelAndFileUpload'
import LabelAndToggle from '../common/form/LabelAndToggle'


class AdmProcessForm extends Component {

    render() {
        const { handleSubmit, readOnly, list } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='prctp' component={LabelAndInput} readOnly={readOnly}
                        label='PRCTP' cols='12 2' placeholder='Informe o PRTP' />

                    <Field name='description' component={LabelAndInput} readOnly={readOnly}
                        label="Descrição Súmaria" cols='12 10' placeholder='Informe a descrição súmaria' />

                    <Field name='modality' label='Modalidade' cols='12 3'
                        placeholder='Informe a Modalidade' values={[
                            {id: 1, nome: 'Inexigibilidade'},
                            {id: 2, nome: "Chamamento Público"},         
                            {id: 3, nome: "Dispensa"}]}
                        component={LabelAndCombo} readOnly={readOnly} />

                    <Field name='modalityNumber' label='Numéro da Modalidade' cols='12 3'
                        placeholder='Informe o número da Modalidade'
                        component={LabelAndInput} readOnly={readOnly} />

                    <Field name='date' component={LabelAndDate} label='Data de Publicação'
                        cols='12 5' readOnly={readOnly} placeholder='Informe a data' />

                    <Field name='finished' component={LabelAndToggle} readOnly={readOnly}
                        label='Finalizado' cols='12 1' />

                    <Field name='object' component={LabelAndInput} readOnly={readOnly}
                        label='Objeto' cols='12 6' placeholder='Descreva o objeto do processo' />

                    <Field name='budgetAllocation' component={LabelAndInput} readOnly={readOnly}
                        label='Dotação Orçamentária' cols='12 6' placeholder='Descreva a dotação ornamentária do processo' />


                    <Field name='file' component={FileUpload} label='Anexo'
                        cols='12 12' readOnly={readOnly} placeholder='Adicionar anexo' />

                    {this.props.modalidadeValue === 'Chamamento Público' &&
                        <Field name='termoDeReferencia' component={FileUpload} label='Termo de Referência'
                            cols='12 12' readOnly={readOnly} placeholder='Adicionar Termo de Referência.' />
                    }
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </div>
            </form>
        )
    }
}

AdmProcessForm = reduxForm({
    form: 'admProcessForm',
    destroyOnUnmount: false,
    initialValues: {
        documentList: null,
        publicServer: {},
        urlReferenceTerm: "ronaldo",
        id: null
    }

})(AdmProcessForm)
const mapStateToProps = state => {
    const selector = formValueSelector('admProcessForm')
    const modalidadeValue = selector(state, 'modality');
    return ({
        modalidadeValue,
    })
}
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdmProcessForm)