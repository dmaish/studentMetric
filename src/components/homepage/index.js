import React, { Component } from 'react';
import SignUp from './../signup';

import './homepage.scss';

export default class HomePage extends Component {

  render(){
      return(
        <div className="landing-page">
              <SignUp/>
        </div>
      );
  }
}