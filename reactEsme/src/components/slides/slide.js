/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      index: this.props.index
    }
  }

  render() {

    return (
      <Thumbnail style={{
        marginLeft: 20,
        marginBottom: 0,
        width: 150,
        height: 150,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span>{this.state.name}</span>
        <Button bsStyle="danger" style={{marginTop: 20}} onClick={() => this.props.deleteSlide(this.state.index)}>Supprimer</Button>
      </Thumbnail>
    )
  }
}