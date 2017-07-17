import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndMask extends Component {
    componentDidMount() {

        window.$(() =>
            window.$('.datemask').inputmask('dd/mm/yyyy', { 'placeholder': 'dd/mm/yyyy' })
        )
    }


    render() {
        const { props } = this
        return (
            <Grid cols={props.cols} >
                <div className='form-group'>
                    <label htmlFor={props.name}> {props.label} </label>
                    <input {...props.input}
                        className='form-control datemask'
                        placeholder={props.placeholder}
                        readOnly={props.readOnly}
                        type={props.type}
                        data-inputmask="'alias': 'dd/mm/yyyy'" data-mask />
                </div>
            </Grid >
        )
    }
}
