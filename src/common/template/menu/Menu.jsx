import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'
import { selectMenuItem } from './menuActions'


class Menu extends Component {

    componentWillMount() {
        this.props.selectMenuItem('dashboard')
    }

    render() {
        return (
            < ul className='sidebar-menu' >
                <MenuItem path='/' label='Dashboard' icon='dashboard' target='dashboard' />
                <MenuItem path='myAccount' label='Minha Conta' icon='id-card-o' target='myaccount' />
                <MenuTree label='Processo Administrativo' icon='newspaper-o' target='admprocess'>
                    <MenuItem path='admProcess' label='Em Seleção' icon='paper-plane-o' />
                    <MenuItem path='admProcess' label='Em Execução' icon='handshake-o' />
                </MenuTree>
            </ul >
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectMenuItem }, dispatch)
export default connect(null, mapDispatchToProps)(Menu)

