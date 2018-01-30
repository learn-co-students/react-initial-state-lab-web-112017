// Bomb Component Code Goes Here

import React from 'react'

class ImageSlider extends React.Component{

  constructor(){
    super()

    this.state = {
      currentSlideIndex: 0
    }
  }


  render(){

    return (
      <div>
        <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    )
  }

}

export default ImageSlider;
