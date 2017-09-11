import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Auth from '../auth/Auth'
import AuthRecovery from '../auth/AuthRecovery'
import Register from '../public/Register'

export default props => (

        <Switch>
            <Route exact path='/' component={Auth} />
            <Route exact path='/login' component={Auth} />
            <Route exact path='/recovery' component={AuthRecovery} />
            <Route exact path='/singup' component={Register} />
            <Route path='*' component={Auth} />
        </Switch>
)