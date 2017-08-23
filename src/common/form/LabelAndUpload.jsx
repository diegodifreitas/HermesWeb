import React, { Component } from 'react'
import Grid from '../layout/Grid'

import AvatarCropper from 'react-avatar-cropper'
import FileUpload from './FileUpload'

import '../../styles/upload.css'

export default class LabelAndUpload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cropperOpen: false,
            img: null,
            croppedImg: "http://www.fillmurray.com/400/400"
        }
    }

    handleFileChange = (dataURI) => {
        this.setState({
            img: dataURI,
            croppedImg: this.state.croppedImg,
            cropperOpen: true
        })
    }

    handleCrop = (dataURI) => {
        this.setState({
            cropperOpen: false,
            img: null,
            croppedImg: dataURI
        });

        this.props.input.onChange(dataURI)

    }

    handleRequestHide = () => {
        this.setState({
            cropperOpen: false
        });
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <div className='form-group'>
                    <label htmlFor={this.props.name}> {this.props.label} </label>
                    <div className="avatar-photo">
                        <FileUpload handleFileChange={this.handleFileChange} />
                        <div className="avatar-edit">
                            <span>Click Para Alterar</span>
                            <i className="fa fa-camera"></i>
                        </div>
                        <img className='img-responsive' alt='croppie' src={this.state.croppedImg} />
                    </div>
                    {this.state.cropperOpen &&
                        <AvatarCropper
                            onRequestHide={this.handleRequestHide}
                            cropperOpen={this.state.cropperOpen}
                            onCrop={this.handleCrop}
                            image={this.state.img}
                            width={400}
                            height={400}
                            cropButtonCopy='Cortar imagem'
                            closeButtonCopy='Cancelar'
                        />
                    }
                </div>
            </Grid>
        );
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