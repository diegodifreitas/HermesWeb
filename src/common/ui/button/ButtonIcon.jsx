import React, { Component } from 'react'

import If from '../../operator/If'


class ButtonIcon extends Component {

    componentDidMount() {
        window.$('[data-toggle="tooltip"]').tooltip();
    }

    render() {
        return (
            <If test={!this.props.hide}>
                <button className={'btn btn-' + this.props.cssStyle}
                    onClick={this.props.onClick}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    data-toggle="tooltip" data-placement="top" title={this.props.tooltip}
                >
                    <i className={'fa fa-' + this.props.icon}></i>
                    {this.props.children}
                </button>
            </If>
        )
    }
}

export default ButtonIcon