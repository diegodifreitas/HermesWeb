import React from 'react'

export default props => (
    <div className= {`box box-${props.color}`} >              
            {props.children}
    </div>
)