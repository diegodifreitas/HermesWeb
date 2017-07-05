import React, { Component } from 'react'

import '../common/template/dependencies'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routes from '../main/Routes'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          <Routes />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
