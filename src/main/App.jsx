import React, { Component } from 'react'

import '../common/template/dependencies'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../common/msg/Messages'
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
    // TODO: Criar função para nãop repetir este código
    const arr = window.$('ul.sidebar-menu a')
    const iLen = arr.length
    for (var i = 0; i < iLen; i++) {
      if (arr[i].href == arr[i].baseURI) {
        const li = arr[i].parentNode
        window.$(li).addClass('active')
      }
      else {
        const li = arr[i].parentNode
        window.$(li).removeClass('active')
      }
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          <Routes />
        </div>
        <Footer />
        <Messages />
      </div>

    )
  }
}

export default App
