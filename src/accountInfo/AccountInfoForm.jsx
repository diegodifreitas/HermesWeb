import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './accountInfoActions'
import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndUpload from '../common/form/LabelAndUpload'
import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'

import OscForm from '../osc/OscForm'

import LabelAndDate from '../common/form/LabelAndDate'

class AccountInfoForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>

                {this.props.user.type === 'OSC' &&
                    <OscForm />
                }
                {this.props.user.type !== 'OSC' &&
                    <div>
                        <BoxBody>
                            <Field name='name' component={LabelAndInput} readOnly={readOnly}
                                label='Nome' cols='12 12' />

                            <Field name='email' component={LabelAndInput} readOnly={readOnly}
                                label="Email" cols='12 6' />
                            {this.props.user.type === 'PUBLIC-SERVER' &&
                                <Field name='office' component={LabelAndInput} readOnly={readOnly}
                                    label="Cargo" cols='12 6' />
                            }
                        </BoxBody>
                        <BoxBody>
                            <fieldset>
                                <legend> Alterar senha  </legend>
                                <Field name='password' type='password' component={LabelAndInput} readOnly={readOnly}
                                    label='Senha atual' cols='12 12 6' placeholder='' />
                                <Field name='password' type='password' component={LabelAndInput} readOnly={readOnly}
                                    label='Nova senha' cols='12 12 6' placeholder='' />
                            </fieldset>
                        </BoxBody>
                    </div>
                }

                <BoxFooter>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                </BoxFooter>
            </form>
        )
    }
}

AccountInfoForm = reduxForm({ form: 'accountInfoForm', destroyOnUnmount: false })(AccountInfoForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(AccountInfoForm)