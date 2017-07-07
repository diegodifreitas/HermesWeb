import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tabs/tabReducer'
import MenuReducer from '../common/template/menu/menuReducer'
import AdmProcessReducer from '../admProcess/admProcessReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    menu: MenuReducer,
    admProcess: AdmProcessReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer