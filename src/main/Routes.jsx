import React from 'react'

import {
    Route,
    Switch
} from 'react-router-dom'

import App from './App'
import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Dashboard from '../dashboard/Dashboard'

export default props => (
    <Switch> 
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/admProcess' component={AdmProcess} />
    </Switch>
)