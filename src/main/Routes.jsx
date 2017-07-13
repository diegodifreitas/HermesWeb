import React from 'react'

import {
    Route,
    Switch
} from 'react-router-dom'

//import App from './App'
import AccountInfo from '../accountInfo/AccountInfo'
import AdmProcess from '../admProcess/AdmProcess'
import Dashboard from '../dashboard/Dashboard'

export default props => {
    const userIsInATeam = (nextState, replace, callback) => {
        var arr = window.$('ul.sidebar-menu a')
        var iLen = arr.length
        for (var i = 0;i < iLen; i++) {
            if (arr[i].href == arr[i].baseURI) {
                var li = arr[i].parentNode
                window.$(li).addClass('active')
            }
            else {
                var li = arr[i].parentNode
                window.$(li).removeClass('active')
            }
        }
        console.log(
            '???? eai ?'
        )

    }
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} onUpdater={userIsInATeam()} />
            <Route exact path='/myAccount' component={AccountInfo} />
            <Route exact path='/admProcess' component={AdmProcess} />
            <Route path='*' component={Dashboard} />
        </Switch>
    )
}

/*<Route exact path="/home" render={() => (
  isLoggedIn() ? (
    <Redirect to="/front"/>
  ) : (
    <Home />
  )
)}/>*/

// $(document).ready(function () {
//     var url = window.location;
//     var element = $('ul.sidebar-menu a').filter(function () {
//         return this.href == url || url.href.indexOf(this.href) == 0;
//     });
//     $(element).parentsUntil('ul.sidebar-menu', 'li').addClass('active');
// });

// EU TO FAZENDO //
/*
element = window.$('ul.sidebar-menu a')[1].href == window.$('ul.sidebar-menu a')[1].baseURI
element = 

window.$('ul.sidebar-menu a')
    .filter( 
        ( ) => {
                return this.baseURI == this.href
        })

arr = window.$('ul.sidebar-menu a')
iLen = arr.length
for (var i=0, iLen; i<iLen; i++) {
    if (arr[i].href == arr[i].baseURI) {
         var li = arr[i].parentNode
         window.$(li).addClass('active')
        }
        else{
         var li = arr[i].parentNode
         window.$(li).removeClass('active')
    }
  }

li = element.parentNode
window.$(li).addClass('active')

*/
// ////
// /** add active class and stay opened when selected */
// var url = window.location

// var element = window.$('ul.sidebar-menu a')
//     .filter(() => this.href == url || this.baseURI == this.href)
//     .parent()
//     .addClass('active')


// // for sidebar menu entirely but not cover treeview
// window.$('ul.sidebar-menu a')
//     .filter(() => this.href == url || url.href.indexOf(this.href) == 0)
//     .parent()
//     .addClass('active')

// window.$('ul.sidebar-menu a')
//     .filter(
//     () => this.href != url.href)
//     .parent()
//     .removeClass('active')

// // for treeview
// window.$('ul.treeview-menu a')
//     .filter(
//     () => this.href != url)
//     .parentsUntil(".sidebar-menu > .treeview-menu").removeClass('active')

// window.$('ul.treeview-menu a')
//     .filter(
//     () => this.href == url || url.href.indexOf(this.href) == 0
//     )
//     .parentsUntil(".sidebar-menu > .treeview-menu").addClass('active')