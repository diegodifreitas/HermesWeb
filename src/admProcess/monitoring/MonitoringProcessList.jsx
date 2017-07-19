import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './monitoringProcessActions'

class MonitoringProcessList extends Component {

    componentWillMount() {
        this.props.getList(this.props.processoId)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(monitoringProcess => (
            <tbody key={monitoringProcess.id}>

                <tr key={`atual-${monitoringProcess.id}`}>
                    <td> Atual </td>
                    <td> {monitoringProcess.atualDescricao} </td>
                    <td> {monitoringProcess.atualSetor} </td>
                    <td> {monitoringProcess.atualData} </td>
                    <td>
                        {/*Criar Icon Button*/}
                        <button className='btn btn-warning' onClick={() => this.props.showUpdate(monitoringProcess)} >
                            <i className='fa fa-pencil' />
                        </button>
                        <button className='btn btn-danger' onClick={() => this.props.showDelete(monitoringProcess)} >
                            <i className='fa fa-trash-o' />
                        </button>
                    </td>
                </tr>
                <tr key={`proxima-${monitoringProcess.id}`}>
                    <td> Proxima </td>
                    <td> {monitoringProcess.proximaDescricao} </td>
                    <td> {monitoringProcess.proximoSetor} </td>
                    <td> {monitoringProcess.proximaData} </td>
                </tr>
            </tbody>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th> Fase </th>
                            <th> Descrição </th>
                            <th> Setor </th>
                            <th> Data Prevista</th>
                            <th className='table-action'> Ações </th>
                        </tr>
                    </thead>

                    {this.renderRows()}

                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({ list: state.monitoringProcess.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MonitoringProcessList)