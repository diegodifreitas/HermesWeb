const INITIAL_STATE = { list: [], qtd: 0 }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "OSC_FETCHED":
            if (action.payload.data.payload) {
                return { ...state, list: action.payload.data.payload, qtd: action.payload.data.quantity }
            }else {
                return state
            }
        default:
            return state
    }
}
