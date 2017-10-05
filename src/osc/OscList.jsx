import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Api from '../main/api'

import { getList, showUpdate, showDelete, update } from './oscActions'

import FieldSearch from '../common/form/FieldSearch'
import ButtonIcon from '../common/ui/button/ButtonIcon'


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

                    <ButtonIcon cssStyle='btn btn-warning' onClick={() => {
                        Api.getOsc(`/${osc.id}`)
                            .then(resp => {
                                this.props.showUpdate(resp.data)
                            })
                    }} icon='pencil' tooltip='Alterar' />

                    <ButtonIcon tooltip='Deletar' cssStyle='btn btn-danger' onClick={() => this.props.showDelete(osc)} icon='trash-o' />

                    { (osc.approvalADM === false || osc.approvalPS === false) &&
                        <ButtonIcon tooltip='Aprovar' cssStyle='success' onClick={() => {
                            if (this.props.user.type === 'ADMINISTRATOR') {
                                osc.approvalADM = true
                            } else if (this.props.user.type === 'PUBLIC-SERVER') {
                                osc.approvalPS = true
                            }
                            this.props.update(osc)
                        }} icon='check' />
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
                        <div className="overlay">
                            <i className="fa fa-refresh fa-spin"></i>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    list: state.osc.list,
    isLoading: state.osc.isFetching,
    user: state.auth.user
})
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete, update }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OscList)