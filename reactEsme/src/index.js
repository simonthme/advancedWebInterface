/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import App from 'components/App/app';
import Home from 'components/home/home';
import Profile from 'components/profile/profile';
import Slides from 'components/slides/slides';
import {Router, Route, Link,IndexRoute,
  IndexLink, browserHistory} from 'react-router';



render(<Router history={browserHistory}>
  <Route path="/" component={App}/>
  <Route path="/home" component={Home}>
    <Route path="/profile" component={Profile}/>
    <Route path="/slides" component={Slides}/>
  </Route>
</Router>, document.querySelector('#app'));

