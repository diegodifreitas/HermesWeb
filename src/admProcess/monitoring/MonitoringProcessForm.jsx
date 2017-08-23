import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelAndInput from '../../common/form/LabelAndInput'
import LabelAndTextArea from '../../common/form/LabelAndTextArea'

import LabelAndDate from '../../common/form/LabelAndDate'

import Grid from '../../common/layout/Grid'
import Row from '../../common/layout/Row'


import BoxFooter from '../../common/template/box/BoxFooter'
import BoxBody from '../../common/template/box/BoxBody'

import { init, load } from './monitoringProcessActions'


class MonitoringProcessForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <BoxBody >
                    <fieldset>
                        <legend> Etapa Atual </legend>
                        <Row>
                            <Grid cols='12 8' cssStyle='monitoring-row'>
                                <Field name='atualDescricao' label='Descrição' cols='12 10'
                                    placeholder='Informe uma descrição da fase'
                                    component={LabelAndTextArea} readOnly={readOnly}  />
                            </Grid>
                            <Grid cols='12 4' cssStyle='monitoring-row' >
                                <Field name='atualData' component={LabelAndDate} readOnly={readOnly}
                                    label='Data' cols='12 12' placeholder='Informe a data...' />
                                <Field name='atualSetor' component={LabelAndInput} readOnly={readOnly}
                                    label='Setor' cols='12 12' placeholder='Informe o Setor...' />
                            </Grid>
                        </Row>
                    </fieldset>
                    <fieldset>
                        <legend> Proxima Etapa </legend>
                        <Row>
                            <Grid cols='12 8' cssStyle='monitoring-row'>
                                <Field name='proximaDescricao' label='Descrição' cols='12 12'
                                    placeholder='Informe uma descrição da fase'
                                    component={LabelAndTextArea} readOnly={readOnly} />
                            </Grid>
                            <Grid cols='12 4' cssStyle='monitoring-row' >
                                <Field name='proximaData' component={LabelAndDate} readOnly={readOnly}
                                    label='Data Prevista' cols='12 12' placeholder='Informe a data...' />
                                <Field name='proximoSetor' component={LabelAndInput} readOnly={readOnly}
                                    label='Setor' cols='12 12' placeholder='Informe o Setor...' />
                            </Grid>
                        </Row>
                    </fieldset>
                </BoxBody>
                <BoxFooter>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={() => this.props.init(this.props.processoId)}> Cancelar </button>
                </BoxFooter>
            </form >
        )
    }
}

MonitoringProcessForm = reduxForm({ form: 'monitoringProcessForm', destroyOnUnmount: false })(MonitoringProcessForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init, load }, dispatch)
export default connect(null, mapDispatchToProps)(MonitoringProcessForm)