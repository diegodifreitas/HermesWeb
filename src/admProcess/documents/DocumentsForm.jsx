import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

import LabelAndInput from '../../common/form/LabelAndInput'
import LabelAndDate from '../../common/form/LabelAndDate'
import LabelAndCombo from './LabelAndCombo'

import AttachmentList from './AttachmentList'
import FileInput from './FileInput'
import Grid from '../../common/layout/Grid'

const DocumentsForm = ({ readOnly, fields, meta: { warning, error, touched, submitFailed } }) => (

    <div className="box">
        <div className="box-header with-border">
            <h2 className="box-title"> <strong>Documentos </strong> </h2>

            <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" onClick={() => fields.push({})}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
        <div className="box-body">
            {fields.length === 0 &&
                <Grid cols='12 12'>
                    <div className="alert alert-info alert-dismissible">
                        <h4><i className="icon fa fa-info"></i> Nenhum documento cadastrado!</h4>
                    </div>
                    {error && <label className="control-label help-block" htmlFor="inputError">
                        <i className="fa fa-times-circle-o"></i>
                        {/* &nbsp; */} {error}</label>
                    }
                </Grid>
            }
            {fields.length > 0 &&
                fields.map((document, index) => (
                    <Grid key={index} cols='12 6'>
                        <span >
                            <div className="box box-primary box-solid">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Documento #{index + 1}</h3>

                                    <div className="box-tools pull-right">
                                        <button
                                            className="btn btn-box-tool"
                                            type="button"
                                            title="Remover documento"
                                            onClick={() => fields.remove(index)}
                                        >
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </div>

                                </div>

                                <div className="box-body">
                                    <Field name={`${document}.name`} component={LabelAndInput} readOnly={readOnly}
                                        label='Nome' cols='12 12' placeholder='Informe o nome do documento' />
                                    <Field name={`${document}.type`} component={LabelAndInput} readOnly={readOnly}
                                        label='Tipo' cols='12 6' placeholder='Informe o tipo do documento' />
                                    <Field name={`${document}.expirationDate`} component={LabelAndDate} readOnly={readOnly}
                                        label='Data de expiração' cols='12 6' placeholder='Informe a data de expiração' />

                                    <Field
                                        name={`${document}.file`}
                                        type="file"
                                        component={FileInput} />
                                    {false &&
                                        <Field
                                            name={`${document}.url`}
                                            component={LabelAndInput} />
                                    }
                                    {/*  <FieldArray name={`${document}.hobbies`} component={renderHobbies} /> */}
                                </div>
                                {submitFailed && error && <span>{error}</span>}
                            </div>
                        </span>
                    </Grid>
                ))}
        </div>
    </div>
)

export default DocumentsForm