import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8084/HS_WEB/'
})

export const postAdmProcess = (admProcess) => api.post('admprocess', admProcess)
export const getAdmProcess = (search = '') => api.get('admprocess' + search)
export const deleteAdmProcess = (admProcess) => api.delete('admprocess/' + admProcess.id)
export const putAdmProcess = (admProcess) => api.put('admprocess/' + admProcess.id, admProcess)

export const postMonitoringProcess = (monitoringProcess) => api.post('monitoringProcess', monitoringProcess)
export const getMonitoringProcess = (search) => api.get('monitoringProcess?idProcesso=' + search)
export const deleteMonitoringProcess = (monitoringProcess) => api.delete('monitoringProcess/' + monitoringProcess.id)
export const putMonitoringProcess = (monitoringProcess) => api.put('monitoringProcess/' + monitoringProcess.id, monitoringProcess)

export const postOsc = (osc) => api.post('osc', osc)
export const getOsc = (search = '') => api.get('osc' + search)
export const deleteOsc = (osc) => api.delete('osc/' + osc.id)
export const putOsc = (osc) => api.put('osc/' + osc.id, osc)

export const postUser = (user) => api.post('user', user)
export const getUser = (search = '') => api.get('user' + search)
export const deleteUser = (user) => api.delete('user/' + user.id)
export const putUser = (user) => api.put('user/' + user.id, user)

export const postMessage = (message) => api.post('message', message)
export const getMessage = (search = '') => api.get('message' + search)
export const deleteMessage = (message) => api.delete('message/' + message.id)
export const putMessage = (message) => api.put('message/' + message.id, message)

export const postMember = (member, osc) => api.post(`osc/${osc}/boardMember`, Member)
export const getMember = (search = '', osc) => api.get(`osc/${osc}/boardMember` + search)
export const deleteMember = (member, osc) => api.delete(`osc/${osc}/boardMember/` + Member.id)
export const putMember = (member, osc) => api.put(`osc/${osc}/boardMember/` + member.id, member)

const apis = {
  getAdmProces,
  postAdmProcess,
  deleteAdmProcess,
  putAdmProcess,

  postMonitoringProcess,
  getMonitoringProcess,
  deleteMonitoringProcess,
  putMonitoringProcess,

  getOsc,
  postOsc,
  deleteOsc,
  putOsc,

  getMember,
  postMember,
  deleteMember,
  putMember,

  getUser,
  postUser,
  deleteUser,
  putUser,

  getMessage,
  postMessage,
  deleteMessage,
  putMessage
}

export default apis