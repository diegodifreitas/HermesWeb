import React from 'react'

export default props => {
   // const value = window.document.getElementsByName(props.name)[0].value
    return (<div className="box-tools" >
        <div className="input-group input-group-sm">
            <input type={props.type} name={props.name} className="form-control pull-right" placeholder={props.placeholder} />
            <div className="input-group-btn">
                <button onClick={() => props.handleClick(props.name, window.$(`[name=${props.name}]`).val() )} className="btn btn-default">
                    <i className={`fa fa-${props.icon}`} />
                </button>
            </div>
        </div>
    </div >
    )
}