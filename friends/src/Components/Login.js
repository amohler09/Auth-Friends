import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const Login = props => {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();

        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
            //navigate user to friendsList page
            props.history.push('/protected')
        })
        .catch(err => console.log('error in Login', err))

    }

    return (
        <div>
           <h2>Login Page</h2>
           <form onSubmit={login}>
               <input
               type='text'
               name='username'
               value={credentials.username}
               onChange={handleChange}
               />
               <input
               type='password'
               name='password'
               value={credentials.password}
               onChange={handleChange}
               />
               <button>Log In</button>
           </form>
        </div>
    )
}

//  STEP TWO
//  Create initial state to be credentials with username & password object passed in
//  Create a form, use credentials.username & credentials.password as the values
//  Input needs type, name, value & onChange
//  Create a handleChange function to store all typed in values in the form to state
//     use SPREAD OPERATOR for previously typed in letters
//  Create a login function that will make the post axios call with axiosWithAuth
//      Go create axiosWithAuth then come back

//  STEP FOUR
//  finish axios .post call with endpoint that matches server.js
//  add credentials to post call
//  add .then & .catch
//      .then - initially console.log the results and see where the token is located
//      (usually in the payload but not always)
//      save the 'token' to localStorage so it is remembered (res.data.payload here)
//      navigate the user to the FriendsList page with history object (props.history.push)
//  Now create a PrivateRoute component