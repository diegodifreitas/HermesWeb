import React from 'react'

import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Monitoring from '../admProcess/monitoring/MonitoringProcess'
import Dashboard from '../dashboard/Dashboard'
import Osc from '../osc/Osc'
import AuthOrApp from './AuthOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} onUpdater={mapActiveUrlToMenu()}>
            <IndexRoute component={Dashboard} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/osc' component={Osc} />
            <Route exact path='/admProcess' component={AdmProcess} />
            <Route exact path='/admProcess/:id/monitoring' component={Monitoring} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)