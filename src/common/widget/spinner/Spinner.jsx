import React from 'react'

export default props => (
    <div className=''>
        <div className="modal fade" tabindex="-1" role="dialog">
            {props.children}
        </div>
    </div>
)