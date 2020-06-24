// your Bomb code here!

import React, { Component } from 'react';


export default class Bomb extends Component {
    
    state = {
            secondsLeft: this.props.initialCount
    }

    
    render () {
        return (
            <div>
                {this.state.secondsLeft !== 0 ? <h1>{this.state.secondsLeft} seconds left before I go boom!</h1> : <h1>Boom!</h1>}
            </div>
        );
    }
}