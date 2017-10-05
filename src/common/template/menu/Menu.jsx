import React, { Component } from 'react'
import { connect } from 'react-redux'

import MenuItem from './MenuItem'


class Menu extends Component {

    render() {
        const { user } = this.props.auth
        return (
            < ul className='sidebar-menu tree' data-widget="tree" >
                <li className='header'> MENU DE NAVEGAÇÃO </li>
                <MenuItem path='/' label='Dashboard' icon='dashboard' />
                <MenuItem path='/myAccount' label='Minha Conta' icon='id-card-o' />
                {user.type !== 'OSC' &&
                    <MenuItem path='/osc' label='OSCs' icon='university' />
                }
                {user.type !== 'OSC' && user.type !== 'PUBLIC-SERVER' &&
                    <MenuItem path='/users' label='Gestão de Usuários' icon='users' />
                }
                {user.type !== 'ADMINISTRATOR' &&
                    <MenuItem path='/admProcess' label='Processo Administrativo' icon='bullhorn' />
                }
            </ul >
        )
    }
}


const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps, null)(Menu)


