import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Grid from '../../common/layout/Grid'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

class AdmProcessList extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map(ap => {
            const osc = ap.osc || { name: 'Não informada' }
            return (
                <tr key={ap.id}>
                    <td> {ap.prtp} </td>
                    <td> {ap.description} </td>
                    {this.props.modality === 'Chamamento Público' &&
                        <td> {ap.modalityNumber} </td>
                    }
                    {this.props.modality !== 'Chamamento Público' &&
                        <td> {osc.name} </td>
                    }
                    <td> {ap.date} </td>
                    <td>
                        <Link to={'/publicdata/' + ap.id} >
                            <ButtonIcon type='button' cssStyle='primary' tooltip='Detalhes'
                                icon='user-o' />
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const { list } = this.props
        return (
            <div>
                {(list.length === 0 || list.length === null) &&
                    <Grid cols='12 12'>
                        <div className="alert alert-info alert-dismissible">
                            <h4><i className="icon fa fa-info"></i> Nenhum Processo da modalidade {this.props.modality} disponível!</h4>
                        </div>
                    </Grid>
                }
                {list.length > 0 &&
                    <div className='class="box-body table-responsive no-padding"'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th> PRTP </th>
                                    <th> Descrição Sumária </th>
                                    {this.props.modality === 'Chamamento Público' &&
                                        <th> Nº da modalidade </th>
                                    }
                                    {this.props.modality !== 'Chamamento Público' &&
                                        <th> OSC </th>
                                    }
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