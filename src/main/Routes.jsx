import React from 'react'

//import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import { Route, Switch } from 'react-router-dom'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Monitoring from '../admProcess/monitoring/MonitoringProcess'
import Dashboard from '../dashboard/Dashboard'
import Osc from '../osc/Osc'
import UserManagement from '../userManagement/UserManagement'
import Message from '../userManagement/message/Message'

export default props => (

        <Switch>
            <Route exact path='/' component={Dashboard} onUpdater={mapActiveUrlToMenu()} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/users' component={UserManagement} />
            <Route exact path='/osc' component={Osc} />
            <Route exact path='/admProcess' component={AdmProcess} />
            <Route exact path='/messages' component={Message} />
            <Route exact path='/admProcess/:id/monitoring' component={Monitoring} />
            <Route path='*' component={Dashboard} />
        </Switch>
)