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
                <MenuTree label='Cadastro' icon='newspaper-o' target='admprocess'>
                    <MenuItem path='admProcess' label='Processo Administrativo' icon='paper-plane-o' />
                </MenuTree>
            </ul >
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectMenuItem }, dispatch)
export default connect(null, mapDispatchToProps)(Menu)

