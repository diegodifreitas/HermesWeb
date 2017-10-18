import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

import { logout } from '../../public/auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.props.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'open' :
                            ''}`}>
                        <a href="javascript:" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src="https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
                                className="user-image" alt="User" />
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg"
                                    className="img-circle" alt="user login" />
                                <p>{name}<small>{email}</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-right">
                                    <Link to='/' onClick={this.props.logout} className="btn btn-default btn-flat" >Sair</Link>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)