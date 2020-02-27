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

export const RemoveFriend = props => {
    const [textInput, setTextInput] = useState({ id: '' })

    const handleChange = e => {
        setTextInput({
            ...textInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        axiosWithAuth()
            .delete(`/api/friends/${textInput.id}`, textInput)
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
        name='id'
        value={textInput.name}
        onChange={handleChange}
        placeholder='ID to Delete'  
        />
         <StyledBtn>Remove Friend</StyledBtn>
            </StyledForm>
    )
}