import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init, uploadFile } from './admProcessActions'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndCombo from '../common/form/LabelAndCombo'
import LabelAndDate from '../common/form/LabelAndDate'
import FileUpload from '../common/form/LabelAndFileUpload'
import LabelAndToggle from '../common/form/LabelAndToggle'
import DownloadBtn from './DownloadBtn'


class AdmProcessForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            urlFile: '',
        }
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload(file) {
        this.props.uploadFile(file)
    }

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='prctp' component={LabelAndInput} readOnly={readOnly}
                        label='PRTP' cols='12 2' placeholder='Informe o PRTP' />

                    <Field name='description' component={LabelAndInput} readOnly={readOnly}
                        label="Descrição Súmaria" cols='12 10' placeholder='Informe a descrição súmaria' />

                    <Field name='modality' label='Modalidade' cols='12 3'
                        placeholder='Informe a Modalidade' values={[
                            { id: 1, nome: 'Inexigibilidade' },
                            { id: 2, nome: "Chamamento Público" },
                            { id: 3, nome: "Dispensa" }]}
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

                    { this.props.url &&
                    <Field name='urlReferenceTerm'
                        component={DownloadBtn} label='Termo de Referência Atual'
                        cols='12 12' readOnly={readOnly} />
                    }
                    <Field name='urlReferenceTerm'
                        maxFiles={1}
                        handleUpload={this.handleUpload}
                        component={FileUpload} label='Termo de Referência'
                        cols='12 12' readOnly={readOnly} placeholder='Adicionar termo' />

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
    destroyOnUnmount: false
})(AdmProcessForm)
const mapStateToProps = state => {
    const selector = formValueSelector('admProcessForm')
    const modalidadeValue = selector(state, 'modality');
    const url = selector(state, 'urlReferenceTerm');
    return ({
        initialValues: {
            publicServer: state.auth.user,
            documentList: null,
            id: null
        },
        modalidadeValue,
        url
    })
}
const mapDispatchToProps = dispatch => bindActionCreators({ init, uploadFile }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdmProcessForm)