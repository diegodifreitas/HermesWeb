const INITIAL_STATE = {
    list: {},
    isFetching: false,
    totalPage: 0,
    last: true,
    first: true,
    numberOfElements: 0
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "MEMBER_REQUEST":
            return { ...state, isFetching: true }
        case "MEMBER_RECEIVE":
            return { 
                ...state, 
                list: action.payload.data.content, 
                isFetching: false,
                totalPage: action.payload.data.totalPage,
                last: action.payload.data.last,
                first: action.payload.data.first,
                numberOfElements: action.payload.data.numberOfElements
             }
        default:
            return state
    }
}
