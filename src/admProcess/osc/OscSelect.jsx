import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import LabelAndCombo from './LabelAndCombo'
import { getList } from '../../osc/oscActions'

class OscSelect extends Component {

    componentWillMount() {
        this.props.getList()
    }

    render() {
        const { oscs, readOnly, fields, meta: { error, submitFailed } } = this.props
        return (

            <div className="box">
                <div className="box-header with-border">
                    <h2 className="box-title"> <strong> Informe a OSC Responsável </strong> </h2>
                </div>
                <div className="box-body">
                    <Field name='osc.id' cols='12 12'
                        values={oscs}
                        component={LabelAndCombo} readOnly={readOnly} />
                </div>
            </div >
        )
    }

}

const mapStateToProps = state => ({
    oscs: state.osc.list,
})
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OscSelect)
