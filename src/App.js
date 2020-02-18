import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import SignIn from './components/signin';
// import SignUp from './components/signup';
import HomePage from './components/homepage';
import './App.css';

function Routes() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route 
              path="/"
              exact
              component={HomePage}/>
      
              <Route 
              path="/signin"
              exact
              component={SignIn}/>
          </Switch>
          </BrowserRouter>

      </div>
      );
  }
  
export default Routes;
