import React from 'react'
import If from '../operator/If'

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
                className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} />
            <span className={`glyphicon glyphicon-${props.icon}
                form-control-feedback`}></span>
            {props.meta.touched &&
                ((props.meta.error &&
                    <label className="control-label help-block" for="inputError"><i className="fa fa-times-circle-o"></i> {/* &nbsp; */} {props.meta.error}</label>) ||
                    (props.meta.warning && <span>{props.meta.warning}</span>))}
        </div>
    </If>
)