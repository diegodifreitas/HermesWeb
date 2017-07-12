import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Grid from '../layout/Grid'

export default class DragDropUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFilePreview: ''
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        console.error(file);
        this.setState({
            uploadedFilePreview: file.preview
        });
    }

    render() {
        return (
            <Grid cols={this.props.cols} section={true}>
                <div className="form-group">
                    {!this.state.uploadedFilePreview === '' ? null :
                        <Dropzone
                            className='box box-widget widget-user'
                            onDrop={this.onImageDrop.bind(this)}
                            multiple={true}
                            accept="image/*">
                            <div>Drop an image or click to select a file to upload.</div>
                        </Dropzone>
                    }

                    {this.state.uploadedFilePreview === '' ? null :
                        <div className="box-body">
                            <div className="box box-widget">
                                <p>{this.state.uploadedFile.name}</p>
                                <img src={this.state.uploadedFilePreview} />
                            </div>
                        </div>
                    }

                </div>
            </Grid>
        )
    }
}

