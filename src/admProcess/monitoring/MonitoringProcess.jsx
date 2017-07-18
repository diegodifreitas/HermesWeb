import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../../common/template/ContentHeader'
import Content from '../../common/template/Content'

import BoxHeader from '../../common/template/box/BoxHeader'
import Box from '../../common/template/box/Box'
import BoxFooter from '../../common/template/box/BoxFooter'
import BoxBody from '../../common/template/box/BoxBody'


import List from './MonitoringProcessList'
import Form from './MonitoringProcessForm'


class MonitoringProcess extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <div className=''>
                <ContentHeader title='Acompanhamento do Processo' small='Processo #XX' />
                <Content >
                    <Box>
                        <BoxHeader title='Etapa' />
                        <BoxBody>
                            <Form
                                onSubmit={this.props.create}
                                submitLabel='Incluir'
                                submitClass='primary'
                                readOnly={false} />
                        </BoxBody>
                        <Box>
                            <BoxBody>
                                <Form
                                    onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary'
                                    readOnly={true} />
                            </BoxBody>
                        </Box>
                    </Box>
                    <BoxFooter>
                    </BoxFooter>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch)
export default connect(null, mapDispatchToProps)(MonitoringProcess)