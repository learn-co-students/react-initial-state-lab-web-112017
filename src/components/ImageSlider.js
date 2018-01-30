// Bomb Component Code Goes Here
import React from 'react'
export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
    this.state = {
      currentSlideIndex: 0
    }
  }
  render() {
    return (
      `I am on slide ${this.state.currentSlideIndex}`
      //console.log(this.props)
    )
  }
}
