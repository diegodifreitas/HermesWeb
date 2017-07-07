import { combineReducers } from 'redux'

import TabReducer from '../common/tabs/tabReducer'
import MenuReducer from '../common/template/menu/menuReducer'
import AdmProcessReducer from '../admProcess/admProcessReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    menu: MenuReducer,
    admProcess: AdmProcessReducer
})

export default rootReducer