/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as userAction from '../../actions/userAction';

import { Nav, Navbar, NavItem, Header, Brand } from 'react-bootstrap';


class Home extends React.Component {
  logout() {
    this.props.users.map((user, index) => {
      if (user.login) {
        this.props.logoutUser(index)
      }
    });
    console.log(this.props.users);
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

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // You can now say this.props.createBook
    logoutUser: index => dispatch(userAction.logoutUser(index))
  }
};

// Maps actions to props

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Home);