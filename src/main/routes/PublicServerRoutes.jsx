import React from 'react'

//import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import { Route, Switch } from 'react-router-dom'

import { mapActiveUrlToMenu } from '../../common/template/menu/menuActiveClass'
import AccountInfo from '../../accountInfo/AccountInfo'
import AdmProcess from '../../admProcess/AdmProcess'
import Dashboard from '../../dashboard/Dashboard'
import Osc from '../../osc/Osc'

export default props => (

        <Switch>
            <Route exact path='/' component={Dashboard} onUpdater={mapActiveUrlToMenu()} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/osc' component={Osc} />
            <Route exact path='/admProcess' component={AdmProcess} />
            <Route path='*' component={Dashboard} />
        </Switch>
)