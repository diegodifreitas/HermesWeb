import React, { Component } from 'react'
import DropzoneComponent from 'react-dropzone-component';
import Grid from '../layout/Grid';

import Api from '../../main/api'

import '../../styles/fileUpload.css';
import '../../../node_modules/react-dropzone-component/dist/react-dropzone.min';

export default class FileUpload extends Component {

    constructor(props) {
        super(props);

        // For a full list of possible configurations,
        // please consult http://www.dropzonejs.com/#configuration
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif,application/pdf",
            autoProcessQueue: false,
            dictDefaultMessage: this.props.placeholder,
            dictRemoveFile: "Remover arquivo",
            maxFiles: this.props.maxFiles,
            dictMaxFilesExceeded: 'Você só pode adicionar um arquivo' 
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif', '.pdf'],
            showFiletypeIcon: true,
            postUrl: 'no-url'
        };

    }

    handleFileAdded(file) {

        this.props.handleUpload(file)

    }

    handleFileRemove(file) {
        console.log(file);
    }


    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            addedfile: this.handleFileAdded.bind(this),
            removedfile: this.handleFileRemove.bind(this)
        }

        return (
            <Grid cols={this.props.cols}>
                <div className='form-group'>
                    <label htmlFor={this.props.name}> {this.props.label} </label>
                    <div className="example">
                        <div id="content">
                            <DropzoneComponent  {...this.props} config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                        </div>
                    </div>
                </div>
            </Grid>
        )
    }

}