/**
 * Created by simonthome on 28/11/2016.
 */
import React from 'react';
import Slide from './slide';

export default class Slides extends React.Component {
  constructor(props) {
    super(props);
    let i = 1;
    this.state = {
      slideName : 'vignette num: ',
      slidesArray : ['vignette num', 'vignette num']
    }
  }

  addSlide() {
    this.state.slidesArray.push(this.state.slideName);


  }
  render() {
    return (
      <div>
        {
          this.state.slidesArray.map((slide, index) => {
            return <Slide key={index} name={slide.slideName}/>
          })
        }
        <button onClick={this.addSlide.bind(this)}>Ajouter vignette</button>
      </div>
    )
  }
}