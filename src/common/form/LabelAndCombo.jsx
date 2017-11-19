import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndCombo extends Component {
    renderOptions() {
        const empty = { id: null, value: null, nome: 'Selecione' }
        const values = this.props.values ? [empty, ...this.props.values] : [empty]
        return values.map(v => (
            <option key={v.id} value={v.value}>{v.nome}</option>
        ))
    }
    render() {
        const { props } = this
        return (
            <Grid cols={props.cols}>
                <div className={props.meta.touched && props.meta.error ? 'form-group has-error' : 'form-group'}>
                    <label>{props.label}</label>
                    <select className="form-control" {...props.input}
                        readOnly={props.readOnly} type={props.type} ref="select">
                        {this.renderOptions()}
                    </select>
                    {props.meta.touched &&
                        ((props.meta.error &&
                            <label className="control-label help-block" htmlFor="inputError"><i className="fa fa-times-circle-o"></i> {/* &nbsp; */} {props.meta.error}</label>) ||
                            (props.meta.warning && <span>{props.meta.warning}</span>))}
                </div>
            </Grid>
        )
    }
}