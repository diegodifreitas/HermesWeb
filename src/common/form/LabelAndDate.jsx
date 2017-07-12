import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndDate extends Component {

    componentDidMount() {
        window.$(this.refs.input).datepicker({
            language: 'pt-BR',
            autoclose: true, 
            todayHighlight: true,
            minViewMode: 0
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
                            ref="input" id="datepicker"
                            placeholder={props.placeholder} />
                    </div>
                </div>
            </Grid>
        )
    }
}

{/*<Field name='published_at' component={LabelAndDate} label='Data de Publicação' 
                        cols='12 6' placeholder='Descreva a dotação ornamentária do processo' />*/}