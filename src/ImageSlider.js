// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    render() {
        let CURRENT_SLIDE = this.state.currentSlideIndex

        return(
            <p>I am on slide {CURRENT_SLIDE}</p>
        )
    }
}

export default ImageSlider;