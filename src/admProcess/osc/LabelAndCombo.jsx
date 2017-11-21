import React, { Component } from 'react'
import Grid from '../../common/layout/Grid'

export default class LabelAndCombo extends Component {
    renderOptions() {

        let empty = { id: 0, value: null, name: 'Selecione' }
        let values = []

        if (this.props.input.value) {
            values = this.props.values ? [this.props.input.value, ...this.props.values] : [empty]
        } else {
            values = this.props.values ? [empty, ...this.props.values] : [empty]
        }
        
        return values.map(v => (
            <option key={v.id} value={v.id}>{v.name}</option>
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