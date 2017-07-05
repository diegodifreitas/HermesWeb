import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

class Dashboard extends Component {
    render() {
        return (
            <div className=''>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content >
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='10' text='Processos Administrativos em Aberto' />
                        <ValueBox cols='12 4' color='red' icon='check-square-o' value='25' text='Associações cadastradas' />
                        <ValueBox cols='12 4' color='blue' icon='address-card-o' value='3' text='Solicitações de Acesso' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard