import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import { Login } from './Components/Login'
import { FriendsList } from './Components/FriendsList'


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Link to='/login'>Login</Link>
      <Link to='/protected'>Friends</Link>
      

      <Switch>
        <Route exact path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
        
      </Switch>
     
    </div>
  );
}

export default App;


