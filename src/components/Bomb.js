// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  remainingTime() {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return 'Boom!'
    }
  }

  render() {
      return (
        <div>{this.remainingTime()}</div>
      )
  }
}

export default Bomb;
