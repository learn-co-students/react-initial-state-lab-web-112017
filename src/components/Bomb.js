import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let bombMessage = this.state.secondsLeft === 0 ? 'Boom!' : `${this.props.initialCount} seconds left before I go boom!`
    return (
      <p>{bombMessage}</p>
    )
  }
}

export default Bomb;
