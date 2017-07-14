import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndDate extends Component {

    // handleDateChangeEvent(ev) {
    //     var fieldName = window.$(ev.target).attr('name')
    //     var value = ev.target.value
    //     this.props.dispatch(this.props.blur(fieldName, value))
    // }

    componentDidMount() {
        window.$(this.refs.input).datepicker({
            format: "dd/mm/yyyy",
            clearBtn: true,
            language: "pt-BR",
            autoclose: true,
            todayHighlight: true,
            toggleActive: true
        })
    }

    componentWillUnmount() {
        window.$(this.refs.input).datepicker('destroy')
    }

    render() {
        const { props } = this
        // window.$(this.refs.input).on('changeDate', (e) => {
        //     props.input.value = e.target.value
        //     console.log(props.input.value)
        //     return null
        // })

        return (
            <Grid cols={props.cols} section={true}>
                <div className="form-group">
                    <label>{props.label}</label>

                    <div className="input-group date">
                        <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <input {...props.input}
                            readOnly={props.readOnly}
                            type={props.type}
                            className="form-control pull-right datepicker date"
                            ref="input"
                            placeholder={props.placeholder} 
                            onBlur={(event, value) => props.input.onBlur(value)}/>
                    </div>
                </div>
            </Grid>
        )
    }
}
