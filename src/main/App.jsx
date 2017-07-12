import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../common/template/dependencies'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Messages from '../common/msg/Messages'
import Spinner from '../common/widget/spinner/Spinner'
import If from '../common/operator/If'

import loading from '../common/widget/spinner/spinnerActions'

class App extends Component {
  render() {
    return (
      <div>
        <If test={!this.props.isLoading}>
          <div className='wrapper'>
            <Header />
            <Sidebar />
            <div className='content-wrapper'>
              {this.props.children}
            </div>
            <Footer />
            <Messages />
          </div>
        </If>
        <Spinner />
        <If test={this.props.isLoading}>
          <div className='wrapper'>
            <h1> EAIII CUZAO! </h1>
            <Spinner />
          </div>
        </If>
      </div>
    )
  }
}

const mapStateToProps = state => ({ isLoading: state.common.isLoading })
export default connect(mapStateToProps, null)(App)
