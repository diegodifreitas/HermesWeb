import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './boardMemberActions'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import FieldSearch from '../common/form/FieldSearch'
import Grid from '../common/layout/Grid'

import BoardMemberForm from './BoardMemberForm'

import BoxBody from '../common/template/box/BoxBody'
import ButtonIcon from '../common/ui/button/ButtonIcon'

class BoardMemberList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const { openModal } = this.props

        const list = this.props.list || []
        return list.map(member => (
            <tr key={member.id}>
                <td> {member.name} </td>
                <td> {member.email} </td>
                <td> {member.phone} </td>
                <td> {member.cpf} </td>
                <td>
                    <ButtonIcon cssStyle='primary' tooltip='Detalhes' onClick={() => openModal(member)} icon='user-o' />
                </td>
            </tr>
        ))
    }

    render() {
        const { showDelete, showUpdate, getList, user } = this.props
        return (
            <div>
                {this.props.list.length == 0 &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible">
                            <h4><i className="icon fa fa-info"></i> Nenhum membro da diretoria cadastrado!</h4>
                        </div>
                    </Grid>
                }
                {this.props.list.length > 0 &&
                    <BoxBody>
                        <div className='table-responsive no-padding'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th> Nome </th>
                                        <th> Email </th>
                                        <th> Telefone </th>
                                        <th> CPF </th>
                                        <th className='table-action'> Ações </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows()}
                                </tbody>
                            </table>
                        </div>
                    </BoxBody>
                }

                <BoardMemberForm user={user}
                    showUpdate={showUpdate}
                    showDelete={showDelete} />

            </div >
        )
    }
}

const mapStateToProps = state => (
    {
        list: state.users.list,
        visible: state.modal.visible,
        user: state.modal.data
    })
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getList,
        showUpdate,
        showDelete,
        openModal,
        closeModal
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BoardMemberList)