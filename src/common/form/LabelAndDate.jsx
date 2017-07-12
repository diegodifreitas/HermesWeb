import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndDate extends Component {

    componentDidMount() {
        window.$(this.refs.input).datepicker({
            autoclose: true
        })
    }
    componentWillUnmount() {
        window.$(this.refs.input).datepicker('destroy')
    }

    render() {
        const { props } = this
        return (
            <Grid cols={props.cols} section={true}>
                <div className="form-group">
                    <label>{props.label}</label>

                    <div className="input-group date">
                        <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <input {...props.input} readOnly={props.readOnly} type={props.type}
                            className="form-control pull-right datepicker date" data-dateformat="dd/mm/yy"
                            ref="input" id="datepicker" />
                    </div>
                </div>
            </Grid>
        )
    }
}