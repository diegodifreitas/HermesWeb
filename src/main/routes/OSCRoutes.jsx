import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { mapActiveUrlToMenu } from '../../common/template/menu/menuActiveClass'
import AccountInfo from '../../accountInfo/AccountInfo'
import AdmProcess from '../../admProcess/AdmProcess'
import Dashboard from '../../dashboard/Dashboard'
import Member from '../../osc/member/Member'
import WorkPlan from '../../workPlan/WorkPlan'

export default props => (

    <Switch>
        <Route exact path='/' component={Dashboard} onUpdater={mapActiveUrlToMenu()} />
        <Route exact path='/myAccount' component={AccountInfo} />
        {props.approval &&
            <Route exact path='/admProcess' component={AdmProcess} />
        }
        {props.approvedPS &&
            <Route exact path='/members' component={Member} />
        }
        <Route exact path='/plan' component={WorkPlan} />
        <Route path='*' component={Dashboard} />
    </Switch>
)