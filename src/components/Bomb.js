// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {
  constructor(props){
    super(props);

      this.state = {
        secondsLeft: this.props.initialCount
      }
  }

  render(){
    let rendermsg;
    if (this.state.secondsLeft === 0){
      rendermsg = 'Boom!'
    } else {
      rendermsg = `${this.state.secondsLeft} seconds left before I go boom!`;
    }
    return (
      <div>{rendermsg}</div>
    )
  }

}

export default Bomb
