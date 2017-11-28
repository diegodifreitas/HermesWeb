import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { mapActiveUrlToMenu } from '../common/template/menu/menuActiveClass'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Toastr from '../common/ui/Toastr'

import { BrowserRouter as Router } from 'react-router-dom'

import AdministratorRoutes from './routes/AdministratorRoutes'
import PublicServerRoutes from './routes/PublicServerRoutes'
import OSCRoutes from './routes/OSCRoutes'

import { getPublicAdmById } from './../publicAdm/publicAdmActions'

class PrivatePages extends Component {
  componentDidMount() {
    const ele = document.getElementById('ipl-progress-indicator')
    if (ele) {
      setTimeout(() => {
        ele.classList.add('available')
      }, 1000)
    }

    this.props.getPublicAdmById(1)
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
                <OSCRoutes approvedPS={user.approvalPS} approval={(user.approvalPS && user.approvalADM)} />
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
const mapDispatchToProps = dispatch => bindActionCreators({ getPublicAdmById }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PrivatePages)