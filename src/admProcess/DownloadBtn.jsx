import React from 'react'
import Grid from '../common/layout/Grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}> {props.label} </label>
            <a href={props.input.value} target="_blank" className="btn btn-app">
                <i className="fa fa-save"></i> Baixar
              </a>
        </div>
    </Grid>
)