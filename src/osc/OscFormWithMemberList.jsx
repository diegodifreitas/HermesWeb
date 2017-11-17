import React, { Component } from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from '../common/ui/modal/Modal'

import { init } from './oscActions'
import { clean } from './member/memberActions'

import { openModal, closeModal } from '../common/ui/modal/modalActions'

import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'
import ButtonIcon from '../common/ui/button/ButtonIcon'

import OscForm from './OscForm'
import MemberList from './member/MemberList'
import MemberForm from './member/MemberForm'

import BoardMemberList from './boardMember/BoardMemberList'
import BoardMemberForm from './boardMember/BoardMemberForm'

import { validate } from '../validate/oscFormValidate'

class OscFormWithMemberList extends Component {

    render() {
        const { handleSubmit, readOnly, openModal, memberList, boardMemberList, clean, closeModal, modal } = this.props

        return (
            <form onSubmit={handleSubmit}>

                <OscForm readOnly={readOnly} />

                <BoxBody>
                    <fieldset>
                        <legend> Membros da diretoria
                            {this.props.user.type === 'OSC' &&
                                <ButtonIcon cssStyle='success' tooltip='Adicionar Membro' type="button"
                                    onClick={() => {
                                        clean()
                                        openModal()
                                    }} icon='plus' />
                            }
                        </legend>
                        <BoardMemberList list={boardMemberList} handleOpen={this.props.openModal} />
                    </fieldset>
                </BoxBody>

                <BoxBody>
                    <fieldset>
                        <legend> Funcionários
                            {this.props.user.type === 'OSC' &&
                                <ButtonIcon cssStyle='success' tooltip='Adicionar Funcionário' type="button"
                                    onClick={() => {
                                        clean()
                                        openModal()
                                    }} icon='plus' />
                            }
                        </legend>
                        <MemberList list={memberList} handleOpen={this.props.openModal} />
                    </fieldset>
                </BoxBody>

                <Modal
                    visible={modal.visible}
                    closeModal={closeModal}
                    title={'Membro da Diretoria'}
                >
                    <BoardMemberForm onSubmit={handleSubmit}
                        submitLabel='Incluir'
                        submitClass='primary'
                        readOnly={readOnly}
                    />
                </Modal >

                <Modal
                    visible={modal.visible}
                    closeModal={closeModal}
                    title={'Funcionarios'}
                >
                    <MemberForm onSubmit={handleSubmit}
                        submitLabel='Incluir'
                        submitClass='primary'
                        readOnly={readOnly}
                    />
                </Modal >

                <BoxFooter >
                    {this.props.user.type === 'OSC' || this.props.showSubmit &&
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                    }
                    <button type='button' className='btn btn-default' onClick={this.props.init}> {this.props.user.type !== 'OSC' ? 'Voltar' : 'Cancelar'} </button>
                </BoxFooter>
            </form>
        )
    }
}

OscFormWithMemberList = reduxForm(
    {
        form: 'oscForm',
        validate,
        destroyOnUnmount: false,
        initialValues: {
            approvalADM: true,
            approvalPS: true,
            type: "OSC"
        }
    })(OscFormWithMemberList)

const selector = formValueSelector('oscForm')
const mapStateToProps = state => (
    {
        visible: state.modal.visible,
        user: state.auth.user,
        modal: state.modal,
        boardMemberList: selector(state, 'boardMembers'),
        memberList: selector(state, 'members'),
    })
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        init,
        clean,
        openModal,
        closeModal
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OscFormWithMemberList)