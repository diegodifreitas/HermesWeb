import React from 'react'

export default props => {

    return <div className={`box box-${props.color || 'default'}`} >
        {props.children}
    </div>
}