import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';


function App() {
  return (
    <div>
      <NavLink to='/signup'>Sign Up</NavLink>
      <NavLink to='/login'>Log In</NavLink>

      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
