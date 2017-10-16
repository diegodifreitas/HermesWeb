import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'

import { showUpdate, showDelete, getList } from './documentsActions'
import Grid from '../../common/layout/Grid'
import BoxBody from '../../common/template/box/BoxBody'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

class DocumentsList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(doc => (
            <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.type}</td>
                <td>{moment(doc.expirationDate, 'YYYY/MM/DD').format('DD/MM/YYYY')} </td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(doc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(doc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        const { list = [] } = this.props
        return (
            <div>
                {(list.length === 0 && !this.props.isLoading) &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible">
                            <h4><i className="icon fa fa-info"></i> Nenhum documento cadastrado!</h4>
                        </div>
                    </Grid>
                }
                <BoxBody>
                    {(list.length > 0 && !this.props.isLoading) &&
                        <div className='table-responsive no-padding'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th> Nome </th>
                                        <th> Tipo </th>
                                        <th> Data de expiração </th>
                                        <th className='table-action'> Ações </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows()}
                                </tbody>
                            </table>
                        </div>
                    }
                    {this.props.isLoading &&
                        <div className="overlay">
                            <i className="fa fa-refresh fa-spin"></i>
                        </div>
                    }
                </BoxBody>
            </div >
        )
    }
}

const mapStateToProps = state => (
    {
        visible: state.modal.visible,
        user: state.auth.user,
        isLoading: state.member.isFetching,
        list: state.document.payload.payload
    })
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        showDelete,
        showUpdate,
        getList
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DocumentsList)