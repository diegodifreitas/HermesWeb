import React, { Component } from 'react'

export default class FileUpload extends Component {

    handleFile = (e) => {
        var reader = new FileReader();
        var file = e.target.files[0];

        if (!file) return;

        reader.onload = function (img) {
            window.$(this.refs.in).val('');
            this.props.handleFileChange(img.target.result);
        }.bind(this);
        reader.readAsDataURL(file);
    }

    render() {
        return (
            <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
        );
    }

}