import React from 'react'

import Grid from '../../common/layout/Grid'
import ButtonIcon from '../../common/ui/button/ButtonIcon'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd() 
        } else if (e.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}>
                </input>
            </Grid>
            <Grid cols='12 3 2'>
                <ButtonIcon style='primary' icon='plus'
                    onClick={props.handleAdd} tooltip='Enviar' > </ButtonIcon>
                <ButtonIcon style='info' icon='search'
                    onClick={props.handleSearch} tooltip='Pesquisar' > </ButtonIcon>
                <ButtonIcon style='default' icon='close'
                    onClick={props.handleClear} tooltip='Limpar' > </ButtonIcon>
            </Grid>
        </div>
    )
}