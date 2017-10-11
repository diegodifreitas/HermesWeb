import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { mapActiveUrlToMenu } from '../../common/template/menu/menuActiveClass'
import AccountInfo from '../../accountInfo/AccountInfo'
import AdmProcess from '../../admProcess/AdmProcess'
import Monitoring from '../../admProcess/monitoring/MonitoringProcess'
import Dashboard from '../../dashboard/Dashboard'
import Osc from '../../osc/Osc'
import Member from '../../osc/member/Member'
import UserManagement from '../../userManagement/UserManagement'

export default props => (

    <Switch>
        <Route exact path='/' component={Dashboard} onUpdater={mapActiveUrlToMenu()} />
        <Route exact path='/myAccount' component={AccountInfo} />
        <Route exact path='/admProcess' component={AdmProcess} />
        <Route exact path='/members' component={Member} />
        <Route path='*' component={Dashboard} />
    </Switch>
)