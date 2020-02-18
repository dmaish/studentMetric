import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import SignUp from './components/signup';
import HomePage from './components/homepage';
import './App.css';

function Routes() {
  return (
      <div>
        <BrowserRouter>
          <HomePage/>
        </BrowserRouter>
      </div>
      );
  }
  
export default Routes;
