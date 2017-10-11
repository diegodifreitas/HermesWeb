import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete, update } from './userManagementActions'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import FieldSearch from '../common/form/FieldSearch'

import ButtonIcon from '../common/ui/button/ButtonIcon'

class UserManagementList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const { openModal, showUpdate, update } = this.props

        let styles = {
            imgList: { width: '80px', verticalAlign: 'middle' },
            image: { color: 'white', width: '40px', height: '40px', border: '2px solid #ecf0f5' },
            td: { verticalAlign: 'middle' }
        }
        const list = this.props.list || []
        return list.map(user => (
            <tr key={user.id}>
                <td style={styles.td} > {user.name} </td>
                <td style={styles.td} > {user.email} </td>
                <td style={styles.td}> {user.type} </td>
                <td>

                    <ButtonIcon cssStyle='primary' tooltip='Detalhes' onClick={() => showUpdate(user)} icon='user-o' />
                    {user.approvalADM === false &&
                        <ButtonIcon cssStyle='success' tooltip='Aprovar Usuario' onClick={() => {
                            user.approvalADM = true
                            update(user)
                        }} icon='check' />
                    }

                </td>
            </tr>
        ))
    }

    render() {
        const { showDelete, showUpdate, getList, user } = this.props
        return (
            <div>
                <div>
                    <FieldSearch handleClick={getList} name='name_search' icon='search' type='text' placeholder='Buscar por nome' />
                    <div className='class="box-body table-responsive no-padding"'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th> Nome </th>
                                    <th> Email </th>
                                    <th> Tipo </th>
                                    <th className='table-action'> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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
        closeModal,
        update
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementList)