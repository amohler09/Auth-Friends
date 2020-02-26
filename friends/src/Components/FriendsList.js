import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'



export const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            //console.log(res.data)
            setFriends(res.data)
            
        })
        .catch(err => console.log('error in FriendsList', err))
    }, [])

    const friendsArray = friends.map(friend => (
    <div key={friend.id}>
        <p>Name: {friend.name}</p>
        <p>Age: {friend.age}</p> 
        <p>Email: {friend.email}</p>
        </div>
        ))


    return (
        <div>
            Friends List
            {friendsArray}
            <Link to='/addfriend'>Add A Friend</Link>
            <Link to='/removefriend'>Remove A Friend</Link>
            <Link to='/updatefriend'>Make A Change</Link>
        </div>
    )
}


//  STEP SEVEN
//  create a useEffect that uses axiosWithAuth and the endpoint for friends on server.js
//  console.log that data, then set the state to your response
//  make initial state the same shape as your response.data
//  map through the array of data and display it
//  add Links to add, remove & update friend
//  but ADD ROUTES to the Switch on App.js and make them PrivateRoutes if necessary
//  create the add, remove & update components and use same steps with paths in server.js

