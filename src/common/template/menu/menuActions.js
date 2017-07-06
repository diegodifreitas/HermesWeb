export function selectMenuItem(itemId){
    return {
        type: 'MENU_SELECTED',
        payload: itemId
    }
}