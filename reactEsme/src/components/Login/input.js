/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <input ref="input" type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.update}/>
      </div>
    )
  }
}