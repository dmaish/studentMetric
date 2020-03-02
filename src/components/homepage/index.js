import React, { Component } from 'react';
import AddStudent from '../addStudent';
import DisplayStudent from '../displayStudent';
import { Route, Switch } from "react-router-dom";

import './homepage.scss';

export default class HomePage extends Component {

  render(){
      return(
        <div className="home-page">
          <Switch>
            <Route path={`/`} exact component={AddStudent} />
            <Route path={`/displaystudents`} component={DisplayStudent} />
          </Switch>
        </div>
      );
  }
}