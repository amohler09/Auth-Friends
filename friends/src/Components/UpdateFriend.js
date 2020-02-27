import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

const StyledForm = styled.form`
    padding: 5% 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledInput = styled.input`
    width: 50%;
    height: 20px;
    margin-bottom: 5%;
    margin: 2% auto;
    border: 1px solid purple;
    box-shadow: -5px 5px 8px dimgrey;
    outline: none;
`;

const StyledBtn = styled.button`
    width: 40%;
    padding: 1%;
    color: white;
    font-size: 1.5rem;
    font-family: 'Fredericka the Great';
    border: 1px solid rebeccapurple;
    background-color: dimgrey;
    box-shadow: -8px 8px 8px rebeccapurple;
    margin: 5% auto;
`;



export const UpdateFriend = props => {
    
    const [textInput, setTextInput] = useState({
        name: '',
        age: '',
        email: '',
        id: ''
    })

    const handleChange = e => {
        setTextInput({
            ...textInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
            .put(`/api/friends/${textInput.id}`, textInput)
            .then(res => {
                console.log(res)

                props.history.push('/protected')
            })
            .catch(err => console.log(err))
    }


    return (
    
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput
                type='text'
                name='name'
                value={textInput.name}
                onChange={handleChange}
                placeholder='name'  
                />

                <StyledInput
                type='text'
                name='age'
                value={textInput.age}
                onChange={handleChange}
                placeholder='age'  
                />

                <StyledInput
                type='text'
                name='email'
                value={textInput.email}
                onChange={handleChange}
                placeholder='email'  
                />

                <StyledInput
                type='text'
                name='id'
                value={textInput.id}
                onChange={handleChange}
                placeholder='ID (required)'  
                />

                <StyledBtn>Update Friend</StyledBtn>
            </StyledForm>
    )
}

//  set State to the same shape as the objects are in server.js with empty spots
//  you don't need an ID because the server has a function on it to create an ID for you
//  form needs type, name, value & onChange
//  onChange = handleChange = spread in previous input & target new values
//  onSubmit = handleSubmit = axiosWithAuth with post path request from server.js
//      make sure to add text input after post request
//      add .then & .catch
//      .then - console.log the results
//      navigate the user to the FriendsList page with history object (props.history.push)
//      reset values after submit
