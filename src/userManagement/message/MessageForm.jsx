import React from 'react'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role='form'>
            <div className="input-group">
                <input name='message'
                    className='form-control'
                    placeholder='Escreva uma mensagem'
                    value={props.text}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    type='text' />
                <span className="input-group-btn">
                    <button onClick={props.handleAdd} className="btn btn-primary btn-flat">Enviar</button>
                </span>
            </div>
        </div>
    )
}