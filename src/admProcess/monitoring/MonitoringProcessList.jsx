import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class MonitoringProcessList extends Component {

    componentWillMount() {

    }

    renderRows() {
        const list = this.props.list || []
        return list.map(ap => (
            <tr key={ap.id}>
                <td> {ap.prtp} </td>
                <td> {ap.modalidade.nome}  &nbsp; <b>nº:</b> &nbsp; {ap.modalidade.numero} </td>
                <td> {ap.descricaoSumaria} </td>
                <td> {ap.pendencias} </td>
                <td>
                    {/*Criar Icon Button*/}
                    <button className='btn btn-warning' onClick={() => null } >
                        <i className='fa fa-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={() => null } >
                        <i className='fa fa-trash-o' />
                    </button>
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
                            <th> PRTP </th>
                            <th> Modalidade </th>
                            <th> Descrição Sumária </th>
                            <th> Pendências </th>
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
const mapStateToProps = state => ({ list: state.admProcess.list })
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MonitoringProcessList)