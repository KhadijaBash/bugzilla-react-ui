import axios from "axios"
import { setToken } from "."

(async () => {
  const data = await setToken();
  localStorage.setItem('token', data.headers.authorization)
})();

export const getAllProjects = () => axios.get("http://localhost:3001/projects",{
  headers:{
    'Authorization': localStorage.getItem('token')
  }
})
