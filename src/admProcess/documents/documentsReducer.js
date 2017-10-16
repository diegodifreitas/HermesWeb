const INITIAL_STATE = { payload: {}, isFetching: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DOCUMENTS_REQUEST":
            return { ...state, isFetching: true }
        case "DOCUMENTS_RECEIVE":
            return { ...state, payload: action.payload.data, isFetching: false }
        default:
            return state
    }
}
