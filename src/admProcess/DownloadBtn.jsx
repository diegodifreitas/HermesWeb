import React from 'react'
import Grid from '../common/layout/Grid'
import consts from '../consts'


export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}> {props.label} </label>
            <a href={`${consts.API_URL}/storage/download?fileName=` + props.input.value} target="_blank" classNameName="btn btn-app" >
                <img class="img img-circle" style={{ width: "90px" }} src="http://www.iconarchive.com/download/i65471/icojam/blue-bits/document-arrow-down.ico" alt="User Avatar" />
            </a>
        </div>
    </Grid>
)