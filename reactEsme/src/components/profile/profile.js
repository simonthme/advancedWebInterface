/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as userAction from '../../actions/userAction';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

  }

  componentDidMount() {
    this.getUserName();
  }

  getUserName() {
    this.props.users.map((user) => {
      if (user.login) {
        this.setState({
          username: user.username
        });
      }
    });

  }

  deleteUser() {
    this.props.users.map((user, index) => {
      if (user.login) {
        this.props.removeUser(index);
        browserHistory.push('/');
      }
    })
  }


  render() {

    return (
      <div>
        <h2>UserName :</h2>
        <h3>{this.state.username}</h3>
        <Button onClick={this.deleteUser.bind(this)}>Supprimer Utilisateur</Button>
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
    removeUser: index => dispatch(userAction.removeUser(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);