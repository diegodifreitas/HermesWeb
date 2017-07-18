import React from 'react'

export default props => {
    return <div className={`row ${props.style || ''}`} >{props.children}</div>
}