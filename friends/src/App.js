import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'

import { Login } from './Components/Login'
import { FriendsList } from './Components/FriendsList'
import { AddFriend } from './Components/AddFriend'
import { RemoveFriend } from './Components/RemoveFriend'
import { UpdateFriend } from './Components/UpdateFriend'

import styled from 'styled-components'

  const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    padding-bottom: 5%;
    text-align: center;
    margin-top: 5%;
    background-color: lightgrey;
  `;

  const InnerDiv = styled.div`
    display: flex;
    width: 94%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    background-color: dimgrey;
    padding: 3%;
  `;

  const StyledLink = styled(Link)`
    font-family: 'Calligraffitti';
    width: 15%;
    color: white;
    font-size: 2rem;
    text-decoration: none;
    text-align: right;
    text-shadow: -5px 5px 5px rebeccapurple;

      &:visited {
        color: white;
        
      }
      &:hover {
        color: black;
        text-shadow: -5px 5px 5px rebeccapurple;
      } 
    
  `;

  const Header = styled.span`
    font-family: 'Lobster';
    font-size: 4rem;
    text-shadow: -8px 8px 8px white;
    padding-right: 10%;
    width: 50%;
    text-decoration: none;
  `;

function App() {
  return (
    <AppDiv>
      <InnerDiv>
        <Header>Welcome!</Header>
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/protected'>Friends</StyledLink>
      </InnerDiv>
      
      

      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/addfriend' component={AddFriend} />
        <PrivateRoute path='/removefriend' component={RemoveFriend}/>
        <PrivateRoute path='/updatefriend' component={UpdateFriend} />
        <Route path='/' component={Login} />
      </Switch>
     
    </AppDiv>
  );
}

export default App;


//  STEP ONE
//  Wrap ROUTER around entire app in index.js
//  Create FriendsList & Login components for now, add basic divs and import into App
//  Add Links to each page -- FriendsList is the protected page
//  Add a Switch to switch between pages (add nav component later if you have time)
//  Go to Login component

//  STEP SIX
//  Import PrivateRoute and attach to each Route that needs to be protected
//  Go to FriendsList component


