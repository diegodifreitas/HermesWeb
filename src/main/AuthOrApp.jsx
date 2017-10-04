import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PublicPages from './PublicPages'
import PrivatePages from './PrivatePages'
import { validateToken } from '../public/auth/authActions'

class AuthOrApp extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            //this.props.validateToken(this.props.auth.user.token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user) {
            //axios.defaults.headers.common['authorization'] = user.token
            return <PrivatePages>{this.props.children}</PrivatePages>
        } else if (!user && !validToken) {
            return <PublicPages />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)