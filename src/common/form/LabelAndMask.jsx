import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndMask extends Component {
    componentDidMount() {

        window.$(() =>
            window.$('.datemask').inputmask(`${this.props.mask}`)
        )
    }


    render() {
        const { props } = this
        return (
            <Grid cols={props.cols} >
                <div className={props.meta.touched && props.meta.error ? 'form-group has-error' : 'form-group'}>
                    <label htmlFor={props.name}> {props.label} </label>
                    <input {...props.input}
                        className='form-control datemask'
                        placeholder={props.placeholder}
                        readOnly={props.readOnly}
                        type={props.type}
                    />
                    {props.meta.touched &&
                        ((props.meta.error &&
                            <label className="control-label help-block" htmlFor="inputError"><i className="fa fa-times-circle-o"></i> {/* &nbsp; */} {props.meta.error}</label>) ||
                            (props.meta.warning && <span>{props.meta.warning}</span>))}
                </div>
            </Grid >
        )
    }
}

