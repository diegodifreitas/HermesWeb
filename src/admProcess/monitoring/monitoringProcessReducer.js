const INITIAL_STATE = { list: [], fasesSelect: [], data: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "MONITORING_PROCESS_FETCHED":
            return { ...state, list: action.payload.data }
        case 'MONITORING_LOAD':
            return { ...state, data: action.data }
        default:
            return state
    }
}
