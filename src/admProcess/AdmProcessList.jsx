import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Grid from '../common/layout/Grid'
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
                <td> {ap.modalidade}  &nbsp; <b>nº:</b> &nbsp; {ap.modalidadeNumero} </td>
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
        const { list, qtd } = this.props
        return (
            <div className='box-body table-responsive no-padding'>
                {(qtd === 0 && !this.props.isLoading) &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible" style={{ margin: "0 0 0 0" }}>
                            <h4><i className="icon fa fa-info"></i> Nenhum Processo administrativo cadastrado!</h4>
                        </div>
                    </Grid>
                }
                {(qtd > 0 && !this.props.isLoading) &&
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
                }
                {this.props.isLoading &&
                    <div className="overlay">
                        <i className="fa fa-refresh fa-spin"></i>
                    </div>
                }
            </div>

        )
    }
}
const mapStateToProps = state => (
    {
        list: state.admProcess.payload.payload,
        qtd: state.admProcess.payload.quantity,
        isLoading: state.admProcess.isFetching
    })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdmProcessList)