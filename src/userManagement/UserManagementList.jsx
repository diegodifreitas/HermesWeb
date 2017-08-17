import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './userManagementActions'

import styles from './userManagement.css.js'

class UserManagementList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {

        const list = this.props.list || []

        return list.map(user => (
            <tr key={user.id}>

                <td style={Object.assign({},styles.tableLine, styles.fieldImg)} > 
                    <img src={user.imagem} 
                         style={styles.image}
                         alt="user image" 
                         className='img-circle' /> 
                </td>
                <td style={styles.tableLine} > {user.nome} </td>
                <td style={styles.tableLine} > {user.email} </td>
                <td style={styles.tableLine}> {user.tipo} </td>
                <td>
                    {/*Criar Icon Button*/}
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(user)} >
                        <i className='fa fa-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(user)} >
                        <i className='fa fa-trash-o' />
                    </button>
                    {user.situacao !== 'Aprovada' &&
                        <button className='btn btn-success' onClick={() => null} >
                            <i className='fa fa-check' />
                        </button>
                    }
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th> Imagem </th>
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
        )
    }
}
const mapStateToProps = state => ({ list: state.users.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserManagementList)