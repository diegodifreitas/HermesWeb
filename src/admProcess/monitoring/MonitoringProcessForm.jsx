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


class MonitoringProcessForm extends Component {
    componentWillMount() {

    }
    render() {
        const { readOnly } = this.props
        return (
            <form role='form' onSubmit={null}>
                <Box color='warning'>
                    <BoxBody >
                        <Grid cols='12 12' style='monitoring-row'>
                            <Field name='fase' component={LabelAndInput} readOnly={readOnly}
                                label="Fase" cols='12 12' placeholder='Informe a fase atual' />
                        </Grid>
                        <Grid cols='12 8' style='monitoring-row'>
                            <Field name='descricao' label='Descrição' cols='12 12'
                                placeholder='Informe uma descrição da fase'
                                component={LabelAndText} readOnly={readOnly} style='monitoring-text-area' />
                            <Field name='proximaEtapa' label='Proxima Etapa' cols='12 12'
                                placeholder='Informe a proxima etapa' style='monitoring-text-area'
                                component={LabelAndText} readOnly={readOnly} />
                        </Grid>
                        <Grid cols='12 4' style='monitoring-row' >
                            <Field name='data' component={LabelAndInput} readOnly={readOnly}
                                label='Objeto' cols='12 12' placeholder='Informe a data...' />

                            <Field name='setor' component={LabelAndInput} readOnly={readOnly}
                                label='Setor' cols='12 12' placeholder='Informe o Setor...' />

                            <Field name='dataPrevista' component={LabelAndInput} readOnly={readOnly}
                                label='Data Prevista' cols='12 12' placeholder='Informe a data prevista...' />

                            <Field name='setorResponsavel' component={LabelAndInput} readOnly={readOnly}
                                label='Setor Responsavel' cols='12 12' placeholder='Informe o Setor Responsavél...' />

                        </Grid>
                    </BoxBody>
                    <BoxFooter>
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                        <button type='button' className='btn btn-default' onClick={null}> Cancelar </button>
                    </BoxFooter>
                </Box>
            </form >
        )
    }
}

MonitoringProcessForm = reduxForm({ form: 'monitoringProcessForm', destroyOnUnmount: false })(MonitoringProcessForm)
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MonitoringProcessForm)