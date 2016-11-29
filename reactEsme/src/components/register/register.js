/**
 * Created by simonthome on 29/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../login/input';
import { browserHistory, Link} from 'react-router';
import { Form, Button, Alert } from 'react-bootstrap';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible : false,
      inputs : [
        {name: 'username', type: 'text', placeholder: 'nom utilisateur'},
        {name: 'password', type: 'password', placeholder: 'mot de passe'},
        {name: 'confirmPassword', type: 'password', placeholder: 'Confirmation de mot de passe'},
      ],
      password: '',
      confirmPassword: '',
      username: '',
    };
    console.log(this.props.users);
  }
  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }


  onUpdate() {
    this.setState({
      username: ReactDOM.findDOMNode(this.refs.username.refs.input).value,
      password: ReactDOM.findDOMNode(this.refs.password.refs.input).value,
      confirmPassword : ReactDOM.findDOMNode(this.refs.confirmPassword.refs.input).value,
    });
  }

  onClick(username, password, confirmPassword) {
    console.log(username);
    console.log(password);
    console.log(confirmPassword);
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
          <h1>S'ENREISTRER</h1>
          <Form style={{width: '40%'}}>
            {
              this.state.inputs.map((slider, index) => {
                return <Input key={index} type={slider.type} placeholder={slider.placeholder} ref={slider.name} update={this.onUpdate.bind(this)}/>
              })
            }
          </Form>
          <Button style={{marginTop: 20, width: '40%'}} bsStyle="success" onClick={this.onClick.bind(this, this.state.username, this.state.password, this.state.confirmPassword)}>S'enregistrer</Button>
          <Link to='/'>Login</Link>

        </div>
        {showAlert()}
      </div>
    )
  }
}