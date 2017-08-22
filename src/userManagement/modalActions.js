export const selectModal = (modalId) => {
    return {
        type: 'MODAL_SELECTED',
        payload: modalId
    }
}

export const openModal = (data) => {
    return {
        type: 'MODAL_OPEN',
        payload: data
    }
}

export const closeModal = (modalId) => {
    return {
        type: 'MODAL_CLOSE',
        payload: false
    }
}