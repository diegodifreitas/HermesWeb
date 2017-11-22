import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class WorkPlan extends Component {
    render() {
        return (
            <div className=''>
                <ContentHeader routes={this.props.match} title='Plano de Trabalho' small="Em construção" />
                <Content >
                    <img src={'./img.png'} alt="boohoo" className="img-responsive" />
                </Content>
            </div>
        )
    }
}

export default WorkPlan
