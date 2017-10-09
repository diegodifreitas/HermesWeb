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

        let value;
        const regex = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;
        if (props.input.value) {
            const dataType = regex.test(props.input.value)
            !dataType ?
                value = moment(props.input.value, 'YYYY/MM/DD').format('DD/MM/YYYY')
                : value = props.input.value
        }

        return (
            <Grid cols={props.cols} section={true}>
                <div className={props.meta.touched && props.meta.error ? 'form-group has-error' : 'form-group'}>
                    <label>{props.label}</label>

                    <div className="input-group date">
                        <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <input  {...props.input}
                            type={props.type}
                            className="form-control"
                            ref="input"
                            value={value}
                            placeholder={props.placeholder}
                            readOnly={props.readOnly}

                        />
                        {props.meta.touched &&
                            ((props.meta.error &&
                                <label className="control-label help-block" htmlFor="inputError"><i className="fa fa-times-circle-o"></i> {/* &nbsp; */} {props.meta.error}</label>) ||
                                (props.meta.warning && <span>{props.meta.warning}</span>))}
                    </div>
                </div>
            </Grid>
        )
    }
}