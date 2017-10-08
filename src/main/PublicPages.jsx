import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Toastr from '../common/ui/Toastr'
import Routes from './routes/PublicRoutes'

class PublicPages extends Component {
    componentDidMount() {
        const ele = document.getElementById('ipl-progress-indicator')
        if (ele) {
            setTimeout(() => {
                ele.classList.add('available')
            }, 1000)
        }
    }

    render() {
        return (
            <Router>
                <div>
                    {this.props.children}
                    <Routes />
                    <Toastr />
                </div>
            </Router>
        )
    }
}

export default PublicPages
