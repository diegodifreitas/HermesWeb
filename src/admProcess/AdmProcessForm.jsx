import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init, getModalidadeSelect } from './admProcessActions'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndCombo from '../common/form/LabelAndCombo'

class AdmProcessForm extends Component {
    componentWillMount() {
        this.props.getModalidadeSelect()
    }
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

                    <Field name='objeto' component={LabelAndInput} readOnly={readOnly}
                        label='Objeto' cols='12 12' placeholder='Descreva o objeto do processo' />

                    <Field name='dotacaoOrcamentaria' component={LabelAndInput} readOnly={readOnly}
                        label='Dotação Orçamentária' cols='12 12' placeholder='Descreva a dotação ornamentária do processo' />

                    <Field name='modalide-combo' label='Modalidade' cols='12 6'
                        placeholder='Informe a Modalidade' values={this.props.modalidades}
                        component={LabelAndCombo} readOnly={this.props.readOnly} />

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
const mapStateToProps = state => ({ modalidades: state.admProcess.modalidadesSelect })
const mapDispatchToProps = dispatch => bindActionCreators({ init, getModalidadeSelect }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdmProcessForm)