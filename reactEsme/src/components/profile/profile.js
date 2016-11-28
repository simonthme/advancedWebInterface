/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';

export default class Profile extends React.Component {
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
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    this.setState({
      username: user.username
    });
  }
  render() {

    return (
      <div>
        <h2>UserName :</h2>
        <h3>{this.state.username}</h3>
      </div>
    )
  }
}