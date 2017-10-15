const INITIAL_STATE = { payload: {}, isFetching: false, file: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADM_PROCESS_REQUEST":
            return { ...state, isFetching: true }
        case "ADM_PROCESS_RECEIVE":
            return { ...state, payload: action.payload.data, isFetching: false }
        case "UPLOAD_FILE":
            return { ...state, file: action.payload.data }
        default:
            return state
    }
}