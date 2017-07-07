import Api from '../main/api'

export const getList = () => {
    const request = Api.getAdmProcess()
    return {
        type: "ADM_PROCESS_FETCHED",
        payload: request
    }
}