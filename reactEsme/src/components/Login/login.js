/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import {connect} from 'react-redux';
import * as userAction from '../../actions/userAction';
import { browserHistory, Link} from 'react-router';
import { Form, Button, Alert } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible : false,
      inputs : [
        {name: 'username', type: 'text', placeholder: 'nom utilisateur'},
        {name: 'password', type: 'password', placeholder: 'mot de passe'},
      ],
      password: '',
      username: '',
    }
  }
  componentDidMount() {
    console.log(this.props.users);
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

  onClick() {
    let alertVisible = false;
    if (this.state.username !== '' && this.state.password !== '' && typeof this.state.username !== 'undefined' && typeof this.state.password !== 'undefined') {
      this.props.users.map((user, index) => {
        if (this.state.username === user.username && this.state.password === user.password) {

          this.props.loginUser(index);
          browserHistory.push('/home');
        } else {
          alertVisible = true;
        }
      });
    }

    if(alertVisible) {
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
        <Link to='/register'>Créer un compte</Link>

      </div>
        {showAlert()}

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
    loginUser: user => dispatch(userAction.loginUser(user))
  }
};

// Maps actions to props

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Login);