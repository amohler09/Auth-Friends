import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import styled from 'styled-components'

const FriendsDiv = styled.div`
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
`;

const Friends = styled.div`
    width: 40%;
    padding: .75%;
    margin: 2% auto;
    border: 2px solid rebeccapurple;
    background-color: rgba(102, 51, 153, 0.29);
    font-family: 'Cabin';
    font-size: 1rem;


`;

const LinkDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 2% auto;
    font-family: 'Raleway';
    font-size: 1rem;
    
`;

const StyledLink = styled(Link)`
    color: white;
    width: 30%;
    padding: 1.5%;
    margin: 3%;
    text-decoration: none;
    border: 1px solid rebeccapurple;
    box-shadow: -2px 2px 8px rebeccapurple,
                -8px 8px 8px rgba(102, 51, 153, 0.29);
    background-color: grey;
`;




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
    <Friends key={friend.id}>
        <p><strong>Name:</strong> {friend.name}</p>
        <p><strong>Age:</strong> {friend.age}</p> 
        <p><strong>Email:</strong> {friend.email}</p>
        <p><strong>ID:</strong> {friend.id}</p>
        </Friends>
        ))


    return (
        <div>
        <FriendsDiv>
            {friendsArray}
        </FriendsDiv>
            <LinkDiv>
            <StyledLink to='/addfriend' ><strong>Add A Friend</strong></StyledLink><br />
            <StyledLink to='/removefriend'><strong>Remove A Friend</strong></StyledLink><br />
            <StyledLink to='/updatefriend'><strong>Make A Change</strong></StyledLink><br />
            </LinkDiv>
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

