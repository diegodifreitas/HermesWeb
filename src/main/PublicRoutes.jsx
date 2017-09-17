import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from '../public/auth/Auth'
import AuthRecovery from '../public/auth/AuthRecovery'
import Register from '../public/Register'
import PublicData from '../public/publicData/PublicData'

export default props => (

    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/login' component={Auth} />
        <Route exact path='/recovery' component={AuthRecovery} />
        <Route exact path='/singup' component={Register} />
        <Route exact path='/publicdata' component={PublicData} />
        <Route path='*' component={Auth} />
    </Switch>
)