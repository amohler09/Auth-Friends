import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'

import { Login } from './Components/Login'
import { FriendsList } from './Components/FriendsList'
import { AddFriend } from './Components/AddFriend'
import { RemoveFriend } from './Components/RemoveFriend'
import { UpdateFriend } from './Components/UpdateFriend'


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Link to='/login'>Login</Link>
      <Link to='/protected'>Friends</Link>
      

      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/addfriend' component={AddFriend} />
        <PrivateRoute path='/removefriend' component={RemoveFriend}/>
        <PrivateRoute path='/updatefriend' component={UpdateFriend} />
      </Switch>
     
    </div>
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


