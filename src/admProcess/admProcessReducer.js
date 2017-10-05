const INITIAL_STATE = { payload: {}, isFetching: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADM_PROCESS_REQUEST":
            return { ...state, isFetching: true }
        case "ADM_PROCESS_RECEIVE":
            return { ...state, payload: action.payload.data, isFetching: false }
        default:
            return state
    }
}