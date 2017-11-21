const INITIAL_STATE = {
    list: {},
    isFetching: false,
    totalPage: 0,
    last: true,
    first: true,
    numberOfElements: 0,
    file: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADM_PROCESS_REQUEST":
            return { ...state, isFetching: true }
        case "ADM_PROCESS_RECEIVE":
            return {
                ...state,
                list: action.payload.data.content,
                isFetching: false,
                totalPage: action.payload.data.totalPage,
                last: action.payload.data.last,
                first: action.payload.data.first,
                numberOfElements: action.payload.data.numberOfElements
            }
        case "UPLOAD_FILE":
            return { ...state, file: action.payload.data }
        default:
            return state
    }
}