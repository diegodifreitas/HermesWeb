import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showUpdate, showDelete } from './boardMemberActions'
import Grid from '../../common/layout/Grid'
import BoxBody from '../../common/template/box/BoxBody'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

class BoardMemberList extends Component {

    renderRows() {
        const { list = [], user, showUpdate, showDelete } = this.props

        return list.map((member) => (
            <tr key={member.id}>
                <td> {member.name} </td>
                <td> {member.email} </td>
                <td> {member.phone} </td>
                <td> {member.office} </td>
                <td>
                    {user.type === 'OSC' &&
                        <span>
                            <ButtonIcon tooltip='Editar' cssStyle='warning' onClick={() => showUpdate(member)} icon='pencil' />
                            <ButtonIcon tooltip='Excluir' cssStyle='btn btn-danger' onClick={() => showDelete(member)} icon='trash-o' />
                        </span>
                    }
                    {user.type !== 'OSC' &&
                        <ButtonIcon type='button' cssStyle='primary' tooltip='Detalhes'
                            onClick={() => this.props.handleOpen(member, 'boardMemberForm')} icon='user-o' />
                    }
                </td>
            </tr>
        ))
    }

    render() {
        const { list = [] } = this.props
        return (
            <div>
                {(list.length === 0 && !this.props.isLoading) &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible">
                            <h4><i className="icon fa fa-info"></i> Nenhum funcionário cadastrado!</h4>
                        </div>
                    </Grid>
                }
                <BoxBody>
                    {(list.length > 0 && !this.props.isLoading) &&
                        <div className='table-responsive no-padding'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th> Nome </th>
                                        <th> Email </th>
                                        <th> Telefone </th>
                                        <th> Cargo </th>
                                        <th className='table-action'> Ações </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows()}
                                </tbody>
                            </table>
                        </div>
                    }
                    {this.props.isLoading &&
                        <div className="overlay">
                            <i className="fa fa-refresh fa-spin"></i>
                        </div>
                    }
                </BoxBody>
            </div >
        )
    }
}

const mapStateToProps = state => (
    {
        visible: state.modal.visible,
        user: state.auth.user,
        isLoading: state.member.isFetching
    })
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        showDelete,
        showUpdate
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BoardMemberList)