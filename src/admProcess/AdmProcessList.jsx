import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Grid from '../common/layout/Grid'
import ButtonIcon from '../common/ui/button/ButtonIcon'

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
                <td> {ap.modality}  &nbsp; <b>nº:</b> &nbsp; {ap.modalityNumber} </td>
                <td> {ap.description} </td>
                <td> {ap.date} </td>
                <td>
                    {this.props.type !== 'OSC' &&
                        <span>
                            <ButtonIcon cssStyle='btn btn-warning' onClick={() => this.props.showUpdate(ap)} icon='pencil' tooltip='Alterar' />
                            <ButtonIcon cssStyle='btn btn-danger' onClick={() => this.props.showDelete(ap)} icon='trash-o' tooltip='Deletar' />
                        </span>
                    }
                    {this.props.type === 'OSC' &&
                        <span>
                            <ButtonIcon cssStyle='btn btn-primary' onClick={() => this.props.showUpdate(ap)} icon='address-book-o' tooltip='Detalhar' />
                            <Link to='/plan'>
                                <ButtonIcon cssStyle='btn btn-success' icon='file-text' tooltip='Enviar Plano de Trabalho' />
                            </Link>
                        </span>
                    }
                </td>
            </tr>
        ))
    }

    render() {
        const { numberOfElements } = this.props
        return (
            <div className='box-body table-responsive no-padding'>
                {(numberOfElements === 0 && !this.props.isLoading) &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible" style={{ margin: "0 0 0 0" }}>
                            <h4><i className="icon fa fa-info"></i> Nenhum Processo administrativo cadastrado!</h4>
                        </div>
                    </Grid>
                }
                {(numberOfElements > 0 && !this.props.isLoading) &&
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th> PRTP </th>
                                <th> Modalidade </th>
                                <th> Descrição Sumária </th>
                                <th> Data de Publicação </th>
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
        user: state.auth.user,
        list: state.admProcess.list,
        totalPage: state.admProcess.totalPage,
        last: state.admProcess.last,
        first: state.admProcess.first,
        numberOfElements: state.admProcess.numberOfElements,
        isLoading: state.admProcess.isFetching
    })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AdmProcessList)