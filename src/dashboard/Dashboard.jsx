import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import ValueBox from '../common/widget/ValueBox'
import Row from '../common/layout/Row'

class Dashboard extends Component {
    render() {
        const { user } = this.props
        return (
            <div className=''>
                <ContentHeader title='Painel de Informações' />
                <Content >
                    {!user.approvalADM && !user.approvalPS &&
                        <div className="callout callout-success">
                            <h4>Seu perfil está em processo de análise.</h4>
                            {user.type === 'OSC' &&
                                <span>
                                    <p>Para completar o seu perfil realize o cadastro dos membros que compõem a associação.</p>
                                    <Link to='/members' >Cadastrar Membros</Link>
                                </span>
                            }
                            {user.type === 'PUBLIC-SERVER' &&
                                <p>Em breve você receberá um email com mais informações.</p>
                            }
                        </div>
                    }
                    {user.type === 'PUBLIC-SERVER' && !user.approvalADM && user.approvalPS &&
                        <div className="callout callout-success">
                            <h4>Seu perfil está em processo de análise.</h4>
                            <p>Aguarde a validação do administrador para acesso total ao sistema.</p>
                        </div>
                    }
                    {user.type === 'OSC' && !user.approvalADM && user.approvalPS &&
                        <div className="callout callout-success">
                            <h4>Seu perfil já foi aprovado pelo Servidor Público</h4>
                            <p>Aguarde a validação do administrador para acesso total ao sistema.</p>
                        </div>
                    }
                    {user.type !== 'ADMINISTRATOR' && user.approvalADM && !user.approvalPS &&
                        <div className="callout callout-success">
                            <h4>Seu perfil já foi aprovado pelo Administrador</h4>
                            <p>Aguarde a validação do servidor púbico para acesso total ao sistema.</p>
                        </div>
                    }
                    {user.approvalADM && user.approvalPS &&
                        <Row>
                            <ValueBox cols='12 4' color='green' icon='bank' value='10' text='Processos Administrativos em Aberto' />
                            <ValueBox cols='12 4' color='red' icon='check-square-o' value='25' text='Associações cadastradas' />
                            <ValueBox cols='12 4' color='blue' icon='address-card-o' value='3' text='Solicitações de Acesso' />
                        </Row>
                    }
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, null)(Dashboard)