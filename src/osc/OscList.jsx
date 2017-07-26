import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './oscActions'

class OscList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(osc => (
            <tr key={osc.id}>
                <td> {osc.nome} </td>
                <td> {osc.cnpj} </td>
                <td> {osc.responsavel.nome} </td>
                <td> {osc.responsavel.terminoDoMandato} </td>
                <td> {osc.situacao} </td>
                <td>
                    {/*Criar Icon Button*/}
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(osc)} >
                        <i className='fa fa-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(osc)} >
                        <i className='fa fa-trash-o' />
                    </button>
                    { osc.situacao !== 'Aprovada' &&
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
                            <th> Nome </th>
                            <th> CNPJ </th>
                            <th> Responsável </th>
                            <th> Fim do Mandato </th>
                            <th> Situação </th>
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
const mapStateToProps = state => ({ list: state.osc.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OscList)