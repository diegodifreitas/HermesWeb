import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BoxBody from '../../common/template/box/BoxBody'
import BoxFooter from '../../common/template/box/BoxFooter'
import LabelAndInput from '../../common/form/LabelAndInput'
import LabelAndDate from '../../common/form/LabelAndDate'
import LabelAndCombo from './LabelAndCombo'
import DownloadBtn from '../DownloadBtn'

import { init, close } from './documentsActions'
import AttachmentList from './AttachmentList'
import FileInput from './FileInput'
import { validate } from '../../validate/memberFormValidate'

import { getList } from '../admProcessActions'

class DocumentsForm extends Component {

    componentWillMount() {
        this.props.getList()
    }

    render() {
        const { handleSubmit, readOnly, user, close, init, attachments } = this.props
        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' placeholder='Informe o nome do documento' />
                    <Field name='type' component={LabelAndInput} readOnly={readOnly}
                        label='Tipo' cols='12 6' placeholder='Informe o tipo do documento' />
                    <Field name='expirationDate' component={LabelAndDate} readOnly={readOnly}
                        label='Data de expiração' cols='12 6' placeholder='Informe a data de expiração' />

                    <Field name='admProcess' label='Processo Administrativo' cols='12 12'
                        values={this.props.admProcess}
                        component={LabelAndCombo} readOnly={readOnly} />

                    {this.props.url &&
                        <Field name='url'
                            component={DownloadBtn} label='Documento Atual'
                            cols='12 12' readOnly={readOnly} />
                    }

                    <Field
                        name="file"
                        type="file"
                        component={FileInput} />
                        
                    {/* <AttachmentList cols='12 12' list={attachments} readOnly={readOnly}
                        field='attachmentList' legend='Anexos' /> */}

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

DocumentsForm = reduxForm({ form: 'documentForm', destroyOnUnmount: false })(DocumentsForm)
const selector = formValueSelector('documentForm')
const mapStateToProps = state => ({
    attachments: selector(state, 'attachmentList'),
    admProcess: state.admProcess.payload.payload,
    user: state.auth.user,
    url: selector(state, 'url'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init, getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsForm)