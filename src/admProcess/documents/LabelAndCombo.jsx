import React, { Component } from 'react'
import Grid from '../../common/layout/Grid'
 
export default class LabelAndCombo extends Component {
    renderOptions() {
        const empty = {id: null, value:null, description: 'Selecione'}
        const values = this.props.values ? [empty, ...this.props.values] : [empty]
        return values.map(v => (
            <option key={v.id} value={v.id}>{v.prctp} {v.description}</option>
        ))
    }
    render() {
        const { props } = this
        return (
            <Grid cols={props.cols}>
                <div className='form-group'>
                    <label>{props.label}</label>
                    <select className="form-control" {...props.input} 
                        readOnly={props.readOnly} type={props.type} ref="select">
                        {this.renderOptions()}
                    </select>
                </div>
            </Grid>
        )
    }
}