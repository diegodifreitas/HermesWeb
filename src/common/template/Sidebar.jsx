import React from 'react'

import Menu from './menu/Menu'

export default props => (
    <aside className='main-sidebar'>
        <section className='sidebar'>
            <Menu location={props.location} />
        </section>
    </aside>
)