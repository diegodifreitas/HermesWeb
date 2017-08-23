const INITIAL_STATE = { selected: '', visible: false, data: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MODAL_SELECTED':
            return { ...state, selected: action.payload }
        case 'MODAL_OPEN':
            return { ...state, visible: true, data: action.payload }
        case 'MODAL_CLOSE':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}