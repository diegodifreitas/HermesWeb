import { combineReducers } from 'redux'

import TabReducer from '../common/tabs/tabReducer'
import MenuReducer from '../common/template/menu/menuReducer'


const rootReducer = combineReducers({
    tab: TabReducer,
    menu: MenuReducer
})

export default rootReducer