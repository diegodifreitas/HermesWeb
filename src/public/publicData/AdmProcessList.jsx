import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Grid from '../../common/layout/Grid'


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
        const { list } = this.props
        return (
            <div>
                {list.length == 0 || list.length == null   &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible">
                            <h4><i className="icon fa fa-info"></i> Nenhum Processo administrativo disponível!</h4>
                        </div>
                    </Grid>
                }
                {list.length > 0 &&
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
                }
            </div>
        )
    }
}

export default AdmProcessList;