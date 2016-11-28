/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import { browserHistory, Link} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'simon', password: 'simon'
        },
        {
          username: 'maite', password: 'maite'
        }
      ],
      inputs : [
        {name: 'username', type: 'text', placeholder: 'nom utilisateur'},
        {name: 'password', type: 'password', placeholder: 'mot de passe'},
      ],
      password: '',
      username: '',
    }
  }


  onUpdate() {
      this.setState({
        username: ReactDOM.findDOMNode(this.refs.username.refs.input).value,
        password: ReactDOM.findDOMNode(this.refs.password.refs.input).value,
      });
  }

  onClick(username, password) {

    let loginSuccess = false;

    if (username !== '' && password !== '' && typeof username !== 'undefined' && typeof password !== 'undefined') {
      this.state.users.map((user) => {
        if (this.state.username === user.username && this.state.password === user.password) {
          loginSuccess = true;
          browserHistory.push('/home');
          localStorage.setItem('user', JSON.stringify(user));
        }
      });
    }

    if(!loginSuccess) {
      alert('Authentication failed');
    }

  }

  render() {
    return (
      <div>

        {
          this.state.inputs.map((slider, index) => {
            return <Input key={index} type={slider.type} placeholder={slider.placeholder} ref={slider.name} update={this.onUpdate.bind(this)}/>
          })
        }

      <button onClick={this.onClick.bind(this, this.state.username, this.state.password)}>Login</button>
      </div>
    )
  }
}