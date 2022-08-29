import axios from 'axios'
import { setToken } from './authentication'

(async () => {
  const data = await setToken()
  localStorage.setItem('token', data.headers.authorization)
})()

export const getAllProjects = () =>
  axios.get(`${process.env.REACT_APP_LOCALHOST_URL}api/v1/projects`, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then()
    .catch(error =>
      alert(error.response.data))
