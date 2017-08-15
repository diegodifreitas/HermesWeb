import React, { Component } from 'react'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../common/msg/Messages'

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
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          {this.props.children}
        </div>
        <Footer />
        <Messages />
      </div>

    )
  }
}

export default App
