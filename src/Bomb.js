// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }   
    }

    render() {
        const secondsLeft = this.state.secondsLeft
        let message
        if (secondsLeft === 0) {
            message = "Boom!"
        } else {
            message = secondsLeft + " seconds left before I go boom!"
        }

        return (
            <div>{message}</div>
        )
    }
}