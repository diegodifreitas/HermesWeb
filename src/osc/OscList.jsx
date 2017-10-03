import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Api from '../main/api'

import { getList, showUpdate, showDelete } from './oscActions'

import FieldSearch from '../common/form/FieldSearch'


class OscList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((osc, index) => (
            <tr key={index}>
                <td> {osc.name} </td>
                <td> {osc.cnpj} </td>
                <td> {osc.phone} </td>
                <td>
                    {(osc.approvalADM === true && osc.approvalPS === true) &&
                        <span className='label label-success'>Ativa</span>
                    }
                    {(osc.approvalADM === false && osc.approvalPS === true) &&
                        <span className='label label-primary'>Aguardando aprovação do Administrador</span>
                    }
                    {(osc.approvalPS === false && osc.approvalADM === false) &&
                        <span className='label label-warning'>Aguardando avaliação do gestor</span>
                    }
                </td>
                <td>
                    {/*Criar Icon Button*/}
                    <button className='btn btn-warning' onClick={() => {
                        Api.getOsc(`/${osc.id}`)
                            .then(resp => {
                                this.props.showUpdate(resp.data)
                            })
                    }}
                    >
                        <i className='fa fa-pencil' />
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(osc)} >
                        <i className='fa fa-trash-o' />
                    </button>
                    {osc.situacao !== 'Aprovada' &&
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
                <FieldSearch handleClick={this.props.getList} name='name_search' icon='search' type='text' placeholder='Buscar por nome' />

                <div className='class="box-body table-responsive no-padding"'>
                    {!this.props.isLoading &&
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th> Nome </th>
                                    <th> CNPJ </th>
                                    <th> Phone </th>
                                    <th> Situação </th>
                                    <th className='table-action'> Ações </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    }
                    {this.props.isLoading &&
                        <h1> CARREGANDO! </h1>
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    list: state.osc.list,
    isLoading: state.osc.isFetching
})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OscList)