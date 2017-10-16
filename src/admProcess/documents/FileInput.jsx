import React from 'react'

export default (field) => {
    delete field.input.value; // <-- just delete the value property
    return <input type="file" id="file" {...field.input} />;
};