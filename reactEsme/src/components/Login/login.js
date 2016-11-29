/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import { browserHistory, Link} from 'react-router';
import { Form, Button, Alert } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible : false,
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
  handleAlertDismiss() {
    this.setState({alertVisible: false});
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
      this.setState({
        alertVisible: true
      })
    }

  }

  render() {
    const showAlert = () => {
      if (this.state.alertVisible) {
        return <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
          Nom d'utilisateur ou mot de passe non valide.
        </Alert>
      } else {
        return null;
      }
    };
    return (
      <div>
      <div style={{width: '80%',height: '500px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <h1>LOGIN</h1>
        <Form style={{width: '40%'}}>
        {
          this.state.inputs.map((input, index) => {
            return <Input key={index} type={input.type} placeholder={input.placeholder} ref={input.name} update={this.onUpdate.bind(this)}/>
          })
        }
        </Form>
      <Button style={{marginTop: 20, width: '40%'}} bsStyle="success" onClick={this.onClick.bind(this, this.state.username, this.state.password)}>Login</Button>
        <Link to={{ pathname: '/register', query: { userArray: this.state.users} }}>Créer un compte</Link>

      </div>
        {showAlert()}

      </div>
    )
  }
}