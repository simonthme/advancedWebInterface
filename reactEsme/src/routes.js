/**
 * Created by simonthome on 29/11/2016.
 */
import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App/app';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Slides from './components/slides/slides';
import Register from './components/register/register';


export default class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}/>
        <Route path="/register" component={Register}/>
        <Route path="/home" component={Home}>
          <Route path="/profile" component={Profile}/>
          <Route path="/slides" component={Slides}/>
        </Route>
      </Router>
    );
  }
}
