import React from 'react'

export default props => (

    <div className="box-tools">
        <div className="input-group input-group-sm">
            <input type={props.type} name={props.name} className="form-control pull-right" placeholder={props.placeholder} />
            <div className="input-group-btn">
                <button type="submit" className="btn btn-default">
                    <i className={`fa fa-${props.icon}`} />
                </button>
            </div>
        </div>
    </div>
)