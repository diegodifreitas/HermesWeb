import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './publicAdmActions'
import LabelAndInput from '../common/form/LabelAndInput'
import BoxBody from '../common/template/box/BoxBody'
import BoxFooter from '../common/template/box/BoxFooter'

//import { validate } from '../validate/oscFormValidate'

class PublicAdmForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form onSubmit={handleSubmit}>

                <BoxBody>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 12' />

                    <Field name='cnpj' component={LabelAndInput} readOnly={readOnly}
                        label="CNPJ" cols='12 6' />

                    <Field name='phone' component={LabelAndInput} readOnly={readOnly}
                        label="Telefone" cols='12 6' />
                </BoxBody>

                <BoxFooter>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}> {this.props.submitLabel} </button>
                </BoxFooter>
            </form>
        )
    }
}

PublicAdmForm = reduxForm({ form: 'publicAdmForm', destroyOnUnmount: false })(PublicAdmForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(PublicAdmForm)