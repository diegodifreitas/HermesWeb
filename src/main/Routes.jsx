import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'


import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Dashboard from '../dashboard/Dashboard'

export default props => (
    <Router history={hashHistory}>
        <Router path='/' component={Dashboard} />
        <Router path='/myAccount' component={AccountInfo} />
        <Router path='/admProcess' component={AdmProcess} />
        <Router from='*' to='/' />
    </Router>
)