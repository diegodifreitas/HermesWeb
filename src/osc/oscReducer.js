const INITIAL_STATE = { list: {}, total: 0, isFetching: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OSC_REQUEST":
            return { ...state, isFetching: true }
        case "OSC_RECEIVE":
            return {
                ...state,
                total: action.payload.data.totalElements ? action.payload.data.totalElements : 0,
                list: action.payload.data.content ? action.payload.data.content : {},
                isFetching: false
            }
        default:
            return state
    }
}
