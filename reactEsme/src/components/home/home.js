/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {browserHistory} from 'react-router';

import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';


export default class Home extends React.Component {
  logout() {
    localStorage.removeItem('user');
    browserHistory.push('/');
  }

  componentDidMount() {
    browserHistory.push('/profile');
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Esme
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer  to="/profile"><NavItem>Profile</NavItem></LinkContainer>
            <LinkContainer to="/slides"><NavItem>Devices</NavItem></LinkContainer>
            <NavItem onClick={this.logout.bind(this)}>Logout</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}