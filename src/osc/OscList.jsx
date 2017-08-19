import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate, showDelete } from './oscActions'

import FieldSearch from '../common/form/FieldSearch'

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
                <td>
                    <div className="progress progress-xs progress-striped active">
                        <div className="progress-bar progress-bar-success" style={ {width: '75%'}}></div>
                    </div>
                </td>
                <td>
                    {osc.situacao === 'Aprovada' &&
                        <span className='label label-success'>{osc.situacao}</span>
                    }
                    {osc.situacao === 'Aguardando aprovação do administrador' &&
                        <span className='label label-primary'>{osc.situacao}</span>
                    }
                    {osc.situacao === 'Aguardando avaliação do gestor' &&
                        <span className='label label-warning'>{osc.situacao}</span>
                    }
                    {osc.situacao === 'Inativa' &&
                        <span className='label label-danger'> {osc.situacao}</span>
                    }
                </td>
                <td>
                    {/*Criar Icon Button*/}
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(osc)} >
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
                    <table className='table table-hover'>
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
            </div>
        )
    }
}
const mapStateToProps = state => ({ list: state.osc.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OscList)