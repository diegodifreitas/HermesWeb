import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


class AdmProcessList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map(ap => (
            <tr key={ap.id}>
                <td> {ap.prtp} </td>
                <td> {ap.modalidade}  &nbsp; <b>nº:</b> &nbsp; {ap.modalidadeNumero} </td>
                <td> {ap.descricaoSumaria} </td>
                <td> {ap.pendencias} </td>
                <td>
                    <Link className="btn btn-success" to={'/admProcess/' + ap.id + '/monitoring'} >
                        <i className='fa fa-briefcase' />
                    </Link>
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

export default AdmProcessList;