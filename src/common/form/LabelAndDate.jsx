import React, { Component } from 'react'
import Grid from '../layout/Grid'
import moment from 'moment'

export default class LabelAndDate extends Component {

    componentDidMount() {
        const klass = this
        const element = window.$(this.refs.input)

        element.datepicker({
            language: "pt-BR"
        }).on("input change", (e) => {
            klass.props.input.onChange(e)
        })
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
                        <input  {...props.input}
                            type={props.type}
                            className="form-control"
                            ref="input"
                            placeholder={props.placeholder}
                            readOnly={props.readOnly}
                        />
                    </div>
                </div>
            </Grid>
        )
    }
}
