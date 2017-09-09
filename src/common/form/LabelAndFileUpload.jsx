import React, { Component } from 'react'
import DropzoneComponent from 'react-dropzone-component';
import Grid from '../layout/Grid';

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
            dictDefaultMessage: "Anexar documento",
            dictRemoveFile: "Remover documento"
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif', '.pdf'],
            showFiletypeIcon: true,
            postUrl: 'no-url'
        };
    }

    handleFileAdded(file) {
        console.log(file);
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            addedfile: this.handleFileAdded.bind(this)
        }

        return (
            <Grid cols={this.props.cols}>
                <label htmlFor={this.props.name}> {this.props.label} </label>
                <div className="example">
                    <div id="content">
                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                    </div>
                </div>
            </Grid>
        )
    }

}