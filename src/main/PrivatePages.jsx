import React, { Component } from 'react'
import { connect } from 'react-redux'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Toastr from '../common/ui/Toastr'

import { BrowserRouter as Router } from 'react-router-dom'

import AdministratorRoutes from './routes/AdministratorRoutes'
import PublicServerRoutes from './routes/PublicServerRoutes'
import OSCRoutes from './routes/OSCRoutes'

class PrivatePages extends Component {
  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator')
    if (ele) {
      setTimeout(() => {
        ele.classList.add('available')
      }, 1000)
    }

    mapActiveUrlToMenu()
  }

  render() {
    const { user } = this.props.auth
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Header />
            <Sidebar />
            <div className='content-wrapper'>
              {this.props.children}

              {user.type === 'ADMINISTRATOR' &&
                <AdministratorRoutes />
              }
              {user.type === 'PUBLIC-SERVER' &&
                <PublicServerRoutes approval={(user.approvalPS && user.approvalADM)} />
              }
              {user.type === 'OSC' &&
                <OSCRoutes approval={(user.approvalPS && user.approvalADM)} />
              }

            </div>
            <Footer />
            <Toastr />
          </div>
        </Router>
      </div>
    )
  }
}


const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(PrivatePages)