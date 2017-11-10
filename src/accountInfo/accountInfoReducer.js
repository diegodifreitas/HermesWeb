const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADM_ACCOUNT_FETCHED":
            return { ...state, list: action.payload.data.content }
        default:
            return state
    }
}
