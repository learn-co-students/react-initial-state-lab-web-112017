// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let message
    if (this.state.secondsLeft === 0){
      message = <p>Boom!</p>
    } else {
      message = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
    return (
      message
    )
  }
}

export default Bomb
