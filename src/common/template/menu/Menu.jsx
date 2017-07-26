import React, { Component } from 'react'

import MenuItem from './MenuItem'

class Menu extends Component {
    render() {
        return (
            < ul className='sidebar-menu tree' data-widget="tree" >
                <li className='header'> MENU DE NAVEGAÇÃO </li>
                <MenuItem path='/' label='Dashboard' icon='dashboard' />
                <MenuItem path='/myAccount' label='Minha Conta' icon='id-card-o' />
                <MenuItem path='/osc' label='OSCs' icon='university' />
                <MenuItem path='/admProcess' label='Processo Administrativo' icon='bullhorn' />
            </ul >
        )
    }
}
export default Menu

