import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export const postAdmProcess = (admProcess) => api.post('admprocess', admProcess)
export const getAdmProcess = (search = '') => api.get('admprocess' + search)
export const deleteAdmProcess = (admProcess) => api.delete('admprocess/' + admProcess.id)
export const putAdmProcess = (admProcess) => api.put('admprocess', admProcess)

export const postAdm = (adm) => api.post('administrator', adm)
export const getAdm = (search = '') => api.get('administrator' + search)
export const deleteAdm = (adm) => api.delete('administrator/' + adm.id)
export const putAdm = (adm) => api.put('administrator', adm)

export const postMonitoringProcess = (monitoringProcess) => api.post('monitoringProcess', monitoringProcess)
export const getMonitoringProcess = (search) => api.get('monitoringProcess?idProcesso=' + search)
export const deleteMonitoringProcess = (monitoringProcess) => api.delete('monitoringProcess/' + monitoringProcess.id)
export const putMonitoringProcess = (monitoringProcess) => api.put('monitoringProcess/' + monitoringProcess.id, monitoringProcess)

export const postOsc = (osc) => api.post('oscs', osc)
export const getOsc = (search = '') => api.get('oscs' + search)
export const getOscById = (id) => api.get('oscs/' + id)
export const deleteOsc = (osc) => api.delete('oscs/' + osc.id)
export const putOsc = (osc) => api.put('oscs', osc)

export const postDocument = (doc) => api.post('document', doc)
export const getDocument = (search = '') => api.get('document' + search)
export const getDocumentById = (id) => api.get('document/' + id)
export const deleteDocument = (doc) => api.delete('document/' + doc.id)
export const putDocument = (doc) => api.put('document', doc)

export const postUser = (user) => api.post('user', user)
export const getUser = (search = '') => api.get('user' + search)
export const deleteUser = (user) => api.delete('user/' + user.id)
export const putUser = (user) => api.put('user', user)

export const postServer = (server) => api.post('publicserver', server)
export const getServer = (search = '') => api.get('publicserver' + search)
export const deleteServer = (server) => api.delete('publicserver/' + server.id)
export const putServer = (server) => api.put('publicserver', server)

export const postMember = (member, osc) => api.post(`osc/${osc}/member`, member)
export const getMember = (search = '', osc) => api.get(`osc/${osc}/member${search}`)
export const deleteMember = (member, osc) => api.delete(`osc/${osc}/member/` + member.id)
export const putMember = (member, osc) => api.put(`osc/${osc}/member`, member)

export const postFile = (file) => api.post('storage/upload', file)
export const getFile = (url) => api.get('storage/download/' + url)

const apis = {
  getAdmProcess,
  postAdmProcess,
  deleteAdmProcess,
  putAdmProcess,

  getAdm,
  postAdm,
  deleteAdm,
  putAdm,

  postMonitoringProcess,
  getMonitoringProcess,
  deleteMonitoringProcess,
  putMonitoringProcess,

  getFile,
  postFile,

  getOsc,
  postOsc,
  deleteOsc,
  putOsc,
  getOscById,

  getDocument,
  postDocument,
  deleteDocument,
  putDocument,
  getDocumentById,

  getMember,
  postMember,
  deleteMember,
  putMember,

  getUser,
  postUser,
  deleteUser,
  putUser,

  getServer,
  postServer,
  deleteServer,
  putServer
}

export default apis