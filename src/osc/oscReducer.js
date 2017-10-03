const INITIAL_STATE = { list: [], qtd: 0, isFetching: false }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OSC_REQUEST":
            return { ...state, isFetching: true }
        case "OSC_RECEIVE":
            return { ...state, list: action.payload.data.payload, qtd: action.payload.data.quantity, isFetching: false }
        default:
            return state
    }
}
