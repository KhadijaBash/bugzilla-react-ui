import axios from "axios";

export const setToken=()=>
  axios.post(
    'http://localhost:3001/users/sign_in',{
      "user":{
        "email": "rabbia1@gmail.com",
        "password": "123456"
      }
    }
  )

