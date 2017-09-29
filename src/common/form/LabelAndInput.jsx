import React from 'react'
import Grid from '../layout/Grid'

export default (props) => (
    <Grid cols={props.cols}>
        <div className={ props.meta.touched && props.meta.error ? 'form-group has-error' : 'form-group'}>
            <label htmlFor={props.name}> {props.label} </label>
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            {props.meta.touched &&
                ((props.meta.error && 
                <label className="control-label help-block" htmlFor="inputError"><i className="fa fa-times-circle-o"></i> {/* &nbsp; */} {props.meta.error}</label>) ||
                    (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
    </Grid>
)
