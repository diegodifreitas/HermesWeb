import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector, initialize } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './oscActions'
import { openModal, closeModal } from '../common/ui/modal/modalActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndDate from '../common/form/LabelAndDate'

import ButtonIcon from '../common/ui/button/ButtonIcon'

import OscForm from './OscForm'
import BoardMemberList from './boardMember/BoardMemberList'
import BoardMemberForm from './boardMember/BoardMemberForm'

import { validate } from '../validate/oscFormValidate'

class OscFormWithBoardMemberList extends Component {

    render() {
        const { handleSubmit, readOnly, openModal, boardMemberList } = this.props
        return (
            <form onSubmit={handleSubmit}>

                <OscForm />

                <BoxBody>
                    <fieldset>
                        <legend> Membros da Diretoria
                            <ButtonIcon cssStyle='success' tooltip='Adicionar Membro Da Diretoria' type="button"
                                onClick={() => openModal()} icon='plus' />
                        </legend>
                        <BoardMemberList list={boardMemberList} handleOpen={this.props.openModal} />
                    </fieldset>
                </BoxBody>

                <BoardMemberForm onSubmit={handleSubmit}
                    submitLabel='Incluir'
                    submitClass='primary'
                />

                <BoxFooter >
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}> Cancelar </button>
                </BoxFooter>
            </form>
        )
    }
}

OscFormWithBoardMemberList = reduxForm(
    {
        form: 'oscForm',
        validate,
        destroyOnUnmount: false,
        initialValues: {
            approvalADM: true,
            approvalPS: true,
            type: "OSC"
        }
    })(OscFormWithBoardMemberList)

const selector = formValueSelector('oscForm')
const mapStateToProps = state => (
    {
        visible: state.modal.visible,
        user: state.modal.data,
        boardMemberList: selector(state, 'boardMemberList'),
    })
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        init,
        openModal,
        closeModal
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OscFormWithBoardMemberList)