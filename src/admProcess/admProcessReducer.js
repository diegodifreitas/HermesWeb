const INITIAL_STATE = { list: [], modalidadesSelect: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADM_PROCESS_FETCHED":
            return { ...state, list: action.payload.data }
        case 'MODALIDADE_SELECT_FETCHED':
            return { ...state, modalidadesSelect: action.payload.modalidades }
        default:
            return state
    }
}
