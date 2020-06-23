// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timeLeft = () => {
        if (this.state.secondsLeft > 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
        return "Boom!"
    }

    render() {
        return(
            <p>{this.timeLeft()}</p>
        )
    }
}

export default Bomb;