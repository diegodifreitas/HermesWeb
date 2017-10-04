const INITIAL_STATE = { list: [], modalidadesSelect: [], qtd: 0 }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADM_PROCESS_FETCHED":
            return { ...state, list: action.payload.data.payload, qtd: action.payload.data.quantity}
        case 'MODALIDADE_SELECT_FETCHED':
            return { ...state, modalidadesSelect: action.payload.modalidades }
        default:
            return state
    }
}
