import axios from 'axios'

export const setToken = async () =>
  axios.post(
    `${process.env.REACT_APP_LOCALHOST_URL}users/sign_in`, {
      user: {
        email: 'rabbia1@gmail.com',
        password: '123456'
      }
    }).then()
    .catch(error =>
      alert(error.response.data))
