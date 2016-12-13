/**
 * Created by simonthome on 29/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../login/input';
import {browserHistory, Link} from 'react-router';
import {Form, Button, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as userAction from '../../actions/userAction';
import Promise from 'bluebird';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
      inputs: [
        {name: 'username', type: 'text', placeholder: 'nom utilisateur'},
        {name: 'password', type: 'password', placeholder: 'mot de passe'},
        {name: 'confirmPassword', type: 'password', placeholder: 'Confirmation de mot de passe'},
      ],
      password: '',
      confirmPassword: '',
      username: '',
    };
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }


  onUpdate() {
    this.setState({
      username: ReactDOM.findDOMNode(this.refs.username.refs.input).value,
      password: ReactDOM.findDOMNode(this.refs.password.refs.input).value,
      confirmPassword: ReactDOM.findDOMNode(this.refs.confirmPassword.refs.input).value,
    });
  }

  register() {
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.confirmPassword);
    return new Promise((resolve, reject) => {
      if (this.state.username !== '' && this.state.password !== '' && this.state.confirmPassword !== '' &&
        this.state.password === this.state.confirmPassword) {
        const user = {
          username: this.state.username,
          password: this.state.password,
          login: false,
        };
        this.props.addUser(user);
        resolve();
      } else {
        this.setState({
          alertVisible: true
        });
        reject();
      }
    })
  }

  onClick() {

    this.register()
      .then(() => {
        this.props.users.map((user, index) => {
          console.log(user);
          if (user.username === this.state.username && user.password === this.state.password) {
            console.log(index);
            this.props.loginUser(index);
            browserHistory.push('/home');
          }
        })
      })
      .catch(err => {
        console.log('error adding user');
      })


  }

  render() {
    const showAlert = () => {
      if (this.state.alertVisible) {
        return <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
          Des champs sont manquants ou incorrects.
        </Alert>
      } else {
        return null;
      }
    };
    return (
      <div>
        <div style={{
          width: '80%',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1>S'ENREGISTRER</h1>
          <Form style={{width: '40%'}}>
            {
              this.state.inputs.map((slider, index) => {
                return <Input key={index} type={slider.type} placeholder={slider.placeholder} ref={slider.name}
                              update={this.onUpdate.bind(this)}/>
              })
            }
          </Form>
          <Button style={{marginTop: 20, width: '40%'}} bsStyle="success"
                  onClick={this.onClick.bind(this, this.state.username, this.state.password,
                    this.state.confirmPassword)}>S'enregistrer</Button>
          <Link to='/'>Login</Link>

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
    addUser: user => dispatch(userAction.addUser(user)),
    loginUser: index => dispatch(userAction.loginUser(index))
  }
};

// Maps actions to props

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Register);