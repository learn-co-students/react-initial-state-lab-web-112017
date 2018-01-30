// Bomb Component Code Goes Here
import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }

    this.bombMessage = this.bombMessage.bind(this)
  }

  bombMessage() {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    } else {
      return "Boom!";
    }
  }

  render() {
    return (
      this.bombMessage()
    )
  }

}
