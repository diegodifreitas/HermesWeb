const INITIAL_STATE = {
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
        switch (action.type) {
        case "LOADING_DATA":
            return { ...state, isLoading: true }
        default:
            return state
    }
    
}