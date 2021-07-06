import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}

//  STEP THREE
//  Import axios
//  Get the token from localStorage
//      Check the server.js documentation to see the token
//  CREATE a new instance of axios with the configured object built into it
//      Look at server.js file, line 54 function authenticator
//      This is requiring the authorization to equal the token
//      And line 55 tells you where it's looking (headers)
//      Configure new object to meet these requirements
//      Create a base URL so you don't have to keep retyping it
//      Make sure to RETURN the axios.create so it works when invoked
//  Export this function and go use it in Login.js & anywhere else you need it