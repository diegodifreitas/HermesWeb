import React, { Component } from 'react'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../common/msg/Messages'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './Routes'

import '../styles/less/AdminLTE.css'
import '../styles/less/skins/_all-skins.css'

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator')
    if (ele) {
      setTimeout(() => {
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }, 1000)
    }

    mapActiveUrlToMenu()
  }

  render() {
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Header />
            <Sidebar />
            <div className='content-wrapper'>
              {this.props.children}
              <Routes />
            </div>
            <Footer />
            <Messages />
          </div>
        </Router>
      </div>

    )
  }
}

export default App
