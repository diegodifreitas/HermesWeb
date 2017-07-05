import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './App'
import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Dashboard from '../dashboard/Dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard} />
            <Router path='/myAccount' component={AccountInfo} />
            <Router path='/admProcess' component={AdmProcess} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)