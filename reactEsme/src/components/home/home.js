/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import { browserHistory, Link} from 'react-router';
import Profile from '../profile/profile';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul role="nav">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/slides">Devices</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}