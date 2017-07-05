import React from 'react'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuItem path='#myAccount' label='Minha Conta' icon='id-card-o' />
        <MenuTree label='Processo Administrativo' icon='newspaper-o'>
            <MenuItem path='#admProcess' label='Em Seleção' icon='paper-plane-o' />
            <MenuItem path='#admProcess' label='Em Execução' icon='handshake-o' />
        </MenuTree>
    </ul>
)