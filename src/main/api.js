import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const createAdmProcess = (admProcess) => api.post('admprocess', admProcess)
export const getAdmProcess = (search) => api.get('admprocess' + search)
export const deleteAdmProcess = (admProcess) => api.delete('admprocess/' + admProcess.id)
export const alterAdmProcess = (admProcess) => api.put('admprocess/' + admProcess.id, admProcess)

const apis = {
  getAdmProcess,
  createAdmProcess,
  deleteAdmProcess,
  alterAdmProcess
}

export default apis