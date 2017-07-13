import React from 'react'

import {
    Route,
    Switch
} from 'react-router-dom'

import App from './App'
import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Dashboard from '../dashboard/Dashboard'

export default props => {
    const userIsInATeam = (nextState, replace, callback) => {
        var url = window.location.href;
        // Will only work if string in href matches with location
        window.$(' a[href="' + url + '"]').parent().addClass('active');

        // Will also work for relative and absolute hrefs
        window.$('ul.nav a').filter(function () {
            return this.href == url;
        }).parent().addClass('active');
    }
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} onEnter={userIsInATeam()} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/admProcess' component={AdmProcess} />
            <Route path='*' component={Dashboard} />
        </Switch>
    )
}

{/*<Route exact path="/home" render={() => (
  isLoggedIn() ? (
    <Redirect to="/front"/>
  ) : (
    <Home />
  )
)}/>*/}
