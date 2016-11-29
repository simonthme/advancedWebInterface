/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import Slide from './slide';
import {Modal, Button, FormControl, Form, ControlLabel} from 'react-bootstrap';

export default class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      slideName : '',
      slidesArray : []
    }
  }

  updateName(e) {
    this.setState({slideName: e.target.value});
    console.log(this.state.slideName);
  }


  addSlide() {
    this.state.slidesArray.push(this.state.slideName);
    console.log('addSlide');
    console.log(this.state.slidesArray);
    this.setState({
      showModal: false,
    })
  }

  showModal() {
    this.setState({
      showModal: true,
      slideName: ''
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  deleteSlide(index) {
    this.state.slidesArray.splice(index, 1);
    console.log(this.state.slidesArray);
    this.setState({
      slideName:''
    })

  }

  render() {
    return (
      <div>
        <div style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
        {
          this.state.slidesArray.map((slide, index) => {
            return <Slide key={index} name={this.state.slideName} deleteSlide={this.deleteSlide.bind(this)} index={index}/>
          })
        }
          <Button style={{marginLeft: 20,
            width: 150,
            height: 150,
            }} onClick={this.showModal.bind(this)}>+</Button>
        </div>

        <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un nom à la vignette</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form>
              <ControlLabel>Nom vignette:</ControlLabel>
              <FormControl  type='text' placeholder='text' value={this.state.slideName} onChange={this.updateName.bind(this)}/>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.closeModal.bind(this)}>Annuler</Button>
            <Button bsStyle="success" onClick={this.addSlide.bind(this)}>Ajouter</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}