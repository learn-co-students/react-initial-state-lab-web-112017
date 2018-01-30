// Bomb Component Code Goes Here
import React from 'react';
import ImageSlider from './ImageSlider'

class Bomb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    }
  };

  render() {
    let returnMessage = ""
    if (this.state.secondsLeft > 0) {
      returnMessage = `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      returnMessage = 'Boom!'
    }

    return (
      <div>
        {returnMessage}
      </div>
    )
  }

}

export default Bomb;
