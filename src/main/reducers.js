import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tabs/tabReducer'
import ModalReducer from '../common/ui/modal/modalReducer'
import AdmProcessReducer from '../admProcess/admProcessReducer'
import MonitoringProcessReducer from '../admProcess/monitoring/monitoringProcessReducer'
import OscReducer from '../osc/oscReducer'
import MemberReducer from '../osc/member/memberReducer'
import DocumentsReducer from '../admProcess/documents/documentsReducer'
import UserManagementReducer from '../userManagement/userManagementReducer'
import AccountInfoReducer from '../accountInfo/accountInfoReducer'
import AuthReducer from '../public/auth/authReducer'

const rootReducer = combineReducers({
    modal: ModalReducer,
    tab: TabReducer,
    admProcess: AdmProcessReducer,
    tab: TabReducer,
    document: DocumentsReducer,
    form: formReducer,
    toastr: toastrReducer,
    osc: OscReducer,
    member: MemberReducer,
    users: UserManagementReducer,
    accountInfo: AccountInfoReducer,
    monitoringProcess: MonitoringProcessReducer,
    auth: AuthReducer

})

export default rootReducer