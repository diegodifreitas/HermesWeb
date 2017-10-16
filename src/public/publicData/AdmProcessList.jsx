import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Grid from '../../common/layout/Grid'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

class AdmProcessList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map(ap => (
            <tr key={ap.id}>
                <td> {ap.prctp} </td>
                <td> {ap.modality}  &nbsp; <b>nº:</b> &nbsp; {ap.modalityNumber} </td>
                <td> {ap.description} </td>
                <td> {moment(ap.date, 'YYYY/MM/DD').format('DD/MM/YYYY')} </td>
                <td>
                    <Link to={'/publicdata/' + ap.id} >
                        <ButtonIcon type='button' cssStyle='primary' tooltip='Detalhes'
                            icon='user-o' />
                    </Link>
                </td>
            </tr>
        ))
    }

    render() {
        const { list } = this.props
        console.log(list)
        return (
            <div>
                {(list.length === 0 || list.length === null) &&
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
                                    <th> Data de publicação </th>
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