import React from 'react'
import Grid from '../layout/Grid'

export default props => (
    <div>
        <Grid cols={props.colsTitle}>
            <h5 className="description-header"><b>{props.title}</b></h5>
        </Grid>
        <Grid cols={props.colsText}>
            <h5 className="description-text">{props.text}</h5>
        </Grid>
    </div>
)