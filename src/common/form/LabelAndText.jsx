import React from 'react'
import Grid from '../layout/Grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}> {props.label} </label>
            <textarea {...props.input} 
                    className={`form-control ${props.style}`}
                    placeholder={props.placeholder} 
                    readOnly={props.readOnly} 
                    type={props.type} />
        </div>
    </Grid>
)