/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{width: 30, height: 30,borderStyle: 'solid', borderWidth: 2, borderRadius: 3, borderColor:'black', marginLeft : 20}}>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
}