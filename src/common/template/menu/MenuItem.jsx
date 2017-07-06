import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectMenuItem } from './menuActions'

class MenuItem extends Component {
    render() {
        const selected = this.props.menu.selected === this.props.target
        return (
            <li  onClick={() => this.props.selectMenuItem(this.props.target)} className={selected ? 'active' : ''} >
                    <Link to={this.props.path}>
                        <i className={`fa fa-${this.props.icon}`}></i> <span>{this.props.label}</span>
                    </Link>
            </li>
        )
    }

}

const mapStateToProps = state => ({ menu: state.menu })
const mapDispatchToProps = dispatch => bindActionCreators({ selectMenuItem }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)