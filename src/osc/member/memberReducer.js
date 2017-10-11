const INITIAL_STATE = { payload: {}, isFetching: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "MEMBER_REQUEST":
            return { ...state, isFetching: true }
        case "MEMBER_RECEIVE":
            return { ...state, payload: action.payload.data, isFetching: false }
        default:
            return state
    }
}
