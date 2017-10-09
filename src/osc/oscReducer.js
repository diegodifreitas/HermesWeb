const INITIAL_STATE = { payload: {}, isFetching: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OSC_REQUEST":
            return { ...state, isFetching: true }
        case "OSC_RECEIVE":
            return { ...state, payload: action.payload.data, isFetching: false }
        default:
            return state
    }
}
