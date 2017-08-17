import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import SpinnerReducer from '../common/widget/spinner/spinnerReducer'
import TabReducer from '../common/tabs/tabReducer'
import AdmProcessReducer from '../admProcess/admProcessReducer'
import MonitoringProcessReducer from '../admProcess/monitoring/monitoringProcessReducer'
import OscReducer from '../osc/oscReducer'
import UserManagementReducer from '../userManagement/userManagementReducer'
import AccountInfoReducer from '../accountInfo/accountInfoReducer'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    admProcess: AdmProcessReducer,
    form: formReducer,
    toastr: toastrReducer,
    common: SpinnerReducer,
    osc: OscReducer,
    users: UserManagementReducer,
    accountInfo: AccountInfoReducer,
    monitoringProcess: MonitoringProcessReducer,
    auth: AuthReducer

})

export default rootReducer