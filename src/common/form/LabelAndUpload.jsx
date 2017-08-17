import React, { Component } from 'react'
import Grid from '../layout/Grid'

export default class LabelAndUpload extends Component {

    render() {
        return (
            <Grid cols={this.props.cols}>
                <div className='form-group'>
                    <label htmlFor={this.props.name}> {this.props.label} </label>
                    <input {...this.props.input}
                        className='form-control'
                        placeholder={this.props.placeholder}
                        readOnly={this.props.readOnly}
                        type={this.props.type} />
                </div>
            </Grid>
        )
    }
}


/* export default class LabelAndUpload extends Component {

    onClickSave = () => {
        if (this.editor) {
            const img = this.editor.getImageScaledToCanvas().toDataURL()
        }
    }

    setEditorRef = (editor) => this.editor = editor

    render() {
        return (
            <div>
                <AvatarEditor
                    ref={this.setEditorRef}
                    image="http://example.com/initialimage.jpg"
                    width={250}
                    height={250}
                    border={50}
                    scale={1.2}
                />
                <input type='button' onClick={this.onClickSave} value='Preview' />
            </div>
        )
    }
} */