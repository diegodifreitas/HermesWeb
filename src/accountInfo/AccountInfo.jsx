import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class AccountInfo extends Component {
    render() {
        return (
            <div className=''>
                <ContentHeader title='Informações da Conta' small='Versão 1.0' />
                <Content > Informações da Conta </Content>
            </div>
        )
    }
}

export default AccountInfo
