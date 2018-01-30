// Bomb Component Code Goes Here
import React from 'react';

class Bomb extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    secondsLeft: this.props.initialCount
  }
}

render() {
  return (
    <div>
    <p>{this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
    </div>
  )
}


}



export default Bomb;
