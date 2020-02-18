import React, { Component } from 'react';
import SignUp from './../signup';
import SignIn from './../signin';
import { Route, Switch } from "react-router-dom";

import './homepage.scss';

export default class HomePage extends Component {

  render(){
      return(
        <div className="landing-page">
          <Switch>
            <Route path={`/`} exact component={SignUp} />
            <Route path={`/signin`} component={SignIn} />
          </Switch>
        </div>
      );
  }
}