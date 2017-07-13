import React, { Component } from 'react'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'


class Menu extends Component {

    componentWillMount() {
    }

    render() {
        return (
            < ul className='sidebar-menu tree' data-widget="tree" >
            <li className='header'> MENU DE NAVEGAÇÃO </li>
                <MenuItem path='/' label='Dashboard' icon='dashboard' target='dashboard' />
                <MenuItem path='/myAccount' label='Minha Conta' icon='id-card-o' target='myaccount' />
                <MenuTree label='Cadastro' icon='newspaper-o' target='admprocess'>
                    <MenuItem path='/admProcess' label='Processo Administrativo' icon='paper-plane-o' />
                </MenuTree>
            </ul >
        )
    }
}
export default Menu

