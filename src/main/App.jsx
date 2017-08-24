import React, { Component } from 'react'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Toastr from '../common/ui/Toastr'

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'

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
            <Toastr />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
