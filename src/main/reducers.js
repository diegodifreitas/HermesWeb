import { combineReducers } from 'redux'

import TabReducer from '../common/tabs/tabReducer'

const rootReducer = combineReducers({
    tab: TabReducer
})

export default rootReducer