import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export const postAdmProcess = (admProcess) => api.post('admprocess', admProcess)
export const getAdmProcess = (search = '') => api.get('admprocess' + search)
export const deleteAdmProcess = (admProcess) => api.delete('admprocess/' + admProcess.id)
export const putAdmProcess = (admProcess) => api.put('admprocess/' + admProcess.id, admProcess)

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
export const putOsc = (osc) => api.put('oscs/' + osc.id, osc)

export const postDocument = (doc) => api.post('documents', doc)
export const getDocument = (search = '') => api.get('documents' + search)
export const getDocumentById = (id) => api.get('documents/' + id)
export const deleteDocument = (doc) => api.delete('documents/' + doc.id)
export const putDocument = (doc) => api.put('documents/' + doc.id, doc)

export const postPublicAdm = (publicAdm) => api.post('publicadm', publicAdm)
export const getPublicAdm = (search = '') => api.get('publicadm' + search)
export const getPublicAdmById = (id) => api.get('publicadm/' + id)
export const deletePublicAdm = (publicAdm) => api.delete('publicadm/' + publicAdm.id)
export const putPublicAdm = (publicAdm) => api.put('publicadm/' + publicAdm.id, publicAdm)

export const postUser = (user) => api.post('users', user)
export const getUser = (search = '') => api.get('users' + search)
export const deleteUser = (user) => api.delete('users/' + user.id)
export const getUserById = (id) => api.get('users/' + id)
export const putUser = (user) => api.put('users/' + user.id, user)

export const postServer = (server) => api.post('publicservers', server)
export const getServer = (search = '') => api.get('publicservers' + search)
export const getServerById = (id) => api.get('publicservers/' + id)
export const deleteServer = (server) => api.delete('publicservers/' + server.id)
export const putServer = (server) => api.put('publicservers/' + server.id, server)

export const postMember = (member, osc) => api.post(`members`, member)
export const getMember = (search = '', osc) => api.get(`members${search}`)
export const deleteMember = (member, osc) => api.delete(`members/` + member.id)
export const putMember = (member, osc) => api.put(`members`, member)

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

 postPublicAdm,
 getPublicAdm,
 getPublicAdmById,
 deletePublicAdm,
 putPublicAdm, 

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
  getUserById,

  getServer,
  postServer,
  deleteServer,
  putServer,
  getServerById
}

export default apis