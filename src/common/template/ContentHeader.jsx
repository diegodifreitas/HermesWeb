import React from 'react'
import { Route } from 'react-router-dom'

import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

const routes = {
    '/': 'Home',
    '/admProcess': 'Processo Administrativo',
    '/osc': 'OSC',
    '/users': 'Gestão de Usuários',
    '/myAccount': 'Meus Dados',
};


const ContentHeader = props => (
    <section className='content-header'>
        <h1> {props.title}  <small> {props.small} </small></h1>

        <Breadcrumbs
            WrapperComponent={(props) => <ol className="breadcrumb" >{props.children}</ol>}
            ActiveLinkComponent={(props) => <li className="active" >{props.children}</li>}
            LinkComponent={(props) => <li>{props.children}</li>} 
            mappedRoutes={routes} />
    </section>
)

export default ContentHeader;