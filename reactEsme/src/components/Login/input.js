/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import {FormControl, ControlLabel} from 'react-bootstrap';

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <ControlLabel>{this.props.placeholder}</ControlLabel>
        <FormControl ref="input" type={this.props.type} placeholder={this.props.type} value={this.props.value} onChange={this.props.update}/>
      </div>
    )
  }
}