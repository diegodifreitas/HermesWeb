import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { mapActiveUrlToMenu } from '../../common/template/menu/menuActiveClass'
import AccountInfo from '../../accountInfo/AccountInfo'
import Dashboard from '../../dashboard/Dashboard'
import Osc from '../../osc/Osc'
import UserManagement from '../../userManagement/UserManagement'
import PublicAdm from '../../publicAdm/PublicAdm'

export default props => (

        <Switch>
            <Route exact path='/' component={Dashboard} onUpdater={mapActiveUrlToMenu()} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/publicAdm' component={PublicAdm} />
            <Route exact path='/users' component={UserManagement} />
            <Route exact path='/osc' component={Osc} />
            <Route path='*' component={Dashboard} />
        </Switch>
)