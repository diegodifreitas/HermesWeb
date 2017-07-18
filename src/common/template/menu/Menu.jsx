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
                <MenuItem path='/' label='Dashboard' icon='dashboard' />
                <MenuItem path='/myAccount' label='Minha Conta' icon='id-card-o' />
                <MenuItem path='/osc' label='OSCs' icon='university' />
                <MenuItem path='/admProcess' label='Processo Administrativo' icon='bullhorn' />

                {/*       <MenuTree label='Processo Administrativo' icon='bullhorn'>
                    <MenuItem path='/admProcess' label='Cadastro' icon='plus' />
                    <MenuItem path='/monitoring' label='Monitoramento' icon='briefcase' />
                </MenuTree> */}
            </ul >
        )
    }
}
export default Menu

