import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const AddFriend = props => {
    const [textInput, setTextInput] = useState({
        name: '',
        age: '',
        email: '',
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
            .post('/api/friends', textInput)
            .then(res => {
                console.log(res)
                props.history.push('/protected')})
            .catch(err => console.log(err))

    }


    return (
        <div>
            Add Friend Feature
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='name'
                value={textInput.name}
                onChange={handleChange}
                placeholder='name'  />
                <input
                type='text'
                name='age'
                value={textInput.age}
                onChange={handleChange}
                placeholder='age'  />
                <input
                type='text'
                name='email'
                value={textInput.email}
                onChange={handleChange}
                placeholder='email'  />
                <button>Add Friend!</button>
            </form>
        </div>
    )
}

//  set State to the same shape as the objects are in server.js with empty spots
//  form needs type, name, value & onChange
//  onChange = handleChange = spread in previous input & target new values
//  onSubmit = handleSubmit = axiosWithAuth with post path request from server.js
//      make sure to add text input after post request
//      add .then & .catch
//      .then - console.log the results
//      navigate the user to the FriendsList page with history object (props.history.push)
//      reset values after submit
