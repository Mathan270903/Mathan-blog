import './HeroImgStyles.css'
import BackImg from '../assets/back-image.webp'

import React, { Component } from 'react'

class HeroImg extends Component {
    render(){
      return (
        <div className='hero'>
            <div className='back-image'>
                <img src={BackImg} />
            </div>
            <div className='hero-contents'>
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
        </div>
      )
    }
}

export default HeroImg