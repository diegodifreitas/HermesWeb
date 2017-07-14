import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import SpinnerReducer from '../common/widget/spinner/spinnerReducer'
import TabReducer from '../common/tabs/tabReducer'
import AdmProcessReducer from '../admProcess/admProcessReducer'
import OscReducer from '../osc/oscReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    admProcess: AdmProcessReducer,
    form: formReducer,
    toastr: toastrReducer,
    common: SpinnerReducer,
    osc: OscReducer
})

export default rootReducer