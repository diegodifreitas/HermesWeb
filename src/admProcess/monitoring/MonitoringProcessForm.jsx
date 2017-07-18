import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelAndInput from '../../common/form/LabelAndInput'
import LabelAndText from '../../common/form/LabelAndText'
import LabelAndCombo from '../../common/form/LabelAndCombo'
import LabelAndDate from '../../common/form/LabelAndDate'

import Grid from '../../common/layout/Grid'
import Row from '../../common/layout/Row'

import BoxHeader from '../../common/template/box/BoxHeader'
import Box from '../../common/template/box/Box'
import BoxFooter from '../../common/template/box/BoxFooter'
import BoxBody from '../../common/template/box/BoxBody'

import { init, getFasesSelect } from './monitoringProcessActions'


class MonitoringProcessForm extends Component {
    componentWillMount() {
        this.props.getFasesSelect()
    }
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                    <BoxBody >
                        <Row>
                            <Grid cols='12 12' style='monitoring-row'>
                                <Field name='fase' label='Fase' cols='12 12'
                                    placeholder='Informe a Fase' values={this.props.fases}
                                    component={LabelAndCombo} readOnly={readOnly} />
                            </Grid>
                        </Row>
                        <Row>
                            <Grid cols='12 8' style='monitoring-row'>
                                <Field name='descricao' label='Descrição' cols='12 12'
                                    placeholder='Informe uma descrição da fase'
                                    component={LabelAndText} readOnly={readOnly} style='monitoring-text-area' />
                            </Grid>
                            <Grid cols='12 4' style='monitoring-row' >
                                <Field name='dataPrevista' component={LabelAndDate} readOnly={readOnly}
                                    label='Data Prevista' cols='12 12' placeholder='Informe a data...' />
                                <Field name='setor' component={LabelAndInput} readOnly={readOnly}
                                    label='Setor' cols='12 12' placeholder='Informe o Setor...' />
                            </Grid>
                        </Row>

                    </BoxBody>
                    <BoxFooter>
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                        <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                    </BoxFooter>
            </form >
        )
    }
}

MonitoringProcessForm = reduxForm({ form: 'monitoringProcessForm', destroyOnUnmount: false })(MonitoringProcessForm)
const mapStateToProps = state => ({ fases: state.monitoringProcess.fasesSelect })
const mapDispatchToProps = dispatch => bindActionCreators({ init, getFasesSelect }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MonitoringProcessForm)