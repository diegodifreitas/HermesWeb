const INITIAL_STATE = { list: [], publicAdm: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "PUBLIC_ADM_FETCHED":
            return { ...state, publicAdm: action.payload.data }
        default:
            return state
    }
}
