import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

const StyledForm = styled.form`
    padding: 5% 0;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
`;

const StyledInput = styled.input`
    width: 50%;
    height: 20px;
    margin-bottom: 5%;
    margin-top: 2%;
    border: 1px solid purple;
    box-shadow: -5px 5px 8px dimgrey;
    outline: none;
`;

const LogInBtn = styled.button`
    width: 20%;
    color: white;
    font-size: 1.5rem;
    font-family: 'Fredericka the Great';
    height: 40px;
    border: 1px solid rebeccapurple;
    background-color: dimgrey;
    box-shadow: -8px 8px 8px rebeccapurple;
    margin: auto;
`;

const StyledLabel = styled.label`
    font-family: 'Fredericka the Great';
    font-size: 1.5rem;
`;



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
           <StyledForm onSubmit={login}>
               <StyledLabel>
                   Username <br />
               <StyledInput
               type='text'
               name='username'
               value={credentials.username}
               onChange={handleChange}
               />
               </StyledLabel>

               <StyledLabel>
                Password <br />
               <StyledInput
               type='password'
               name='password'
               value={credentials.password}
               onChange={handleChange}
               />
               </StyledLabel>
               <LogInBtn>Log In</LogInBtn>
           </StyledForm>
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