import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


import { getList, showUpdate, showDelete } from './admProcessActions'

class AdmProcessList extends Component {

    componentWillMount() {
        this.props.getList()
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
     
                    <Link className="btn btn-success" to={'/admProcess/' + ap.id + '/monitoring'} >
                        <i className='fa fa-briefcase' />
                    </Link>
                    {/*Criar Icon Button*/}
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(ap)} >
                        <i className='fa fa-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(ap)} >
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className='class="box-body table-responsive no-padding"'>
                <table className='table table-hover'>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdmProcessList)