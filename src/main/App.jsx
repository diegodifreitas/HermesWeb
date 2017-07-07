import React, { Component } from 'react'

import '../common/template/dependencies'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../common/msg/Messages'

class App extends Component {
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
