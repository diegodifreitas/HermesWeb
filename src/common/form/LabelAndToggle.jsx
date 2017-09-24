import React from 'react'
import Grid from '../layout/Grid'

export default props => (
        <Grid cols={props.cols}>
                <div className='form-group'>
                        <label htmlFor={props.name}> {props.label} </label>
                        <label className="switch">
                                <input type="checkbox"
                                        {...props.input}
                                        className='form-control'
                                        readOnly={props.readOnly} />
                                <span className="slider"></span>
                        </label>
                </div>
        </Grid>
)

//To DO CSS