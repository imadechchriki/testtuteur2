import axios from 'axios'

const api = axios.create({
  baseURL: 'https://testtuteur1-production.up.railway.app', 
  withCredentials: true 
})

export default api
