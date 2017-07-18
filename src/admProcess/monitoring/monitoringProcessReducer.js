const INITIAL_STATE = { list: [], fasesSelect: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "MONITORING_PROCESS_FETCHED":
            return { ...state, list: action.payload.data }
        case 'FASES_SELECT_FETCHED':
            return { ...state, fasesSelect: action.payload.fases }
        default:
            return state
    }
}
