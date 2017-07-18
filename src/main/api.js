import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const postAdmProcess = (admProcess) => api.post('admprocess', admProcess)
export const getAdmProcess = (search = '') => api.get('admprocess' + search)
export const deleteAdmProcess = (admProcess) => api.delete('admprocess/' + admProcess.id)
export const putAdmProcess = (admProcess) => api.put('admprocess/' + admProcess.id, admProcess)

export const postMonitoringProcess = (monitoringProcess) => api.post('monitoringProcess', monitoringProcess)
export const getMonitoringProcess = (search = '') => api.get('monitoringProcess' + search)
export const deleteMonitoringProcess = (monitoringProcess) => api.delete('monitoringProcess/' + monitoringProcess.id)
export const putMonitoringProcess = (monitoringProcess) => api.put('monitoringProcess/' + monitoringProcess.id, monitoringProcess)

export const postOsc = (osc) => api.post('osc', osc)
export const getOsc = (search = '') => api.get('osc' + search)
export const deleteOsc = (osc) => api.delete('osc/' + osc.id)
export const putOsc = (osc) => api.put('osc/' + osc.id, osc)


const apis = {
  getAdmProcess,
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
  putOsc
}

export default apis