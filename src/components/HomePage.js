import { Link } from 'react-router-dom'
import './HomePageStyles.css'
import BgImage from '../assets/2.avif'

import React from 'react'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='contents'>
                <h3>Hi, there</h3>
                <h2>I'm Mathan Raj</h2>
                <p>Full Stack Developer</p>
                <div className='btns'>
                    <Link to='/project' className='btn'>Projects</Link>
                    <Link to='/contact' className='btn-light'>Contact</Link>
                </div>
            </div>

            <div className='images'>
                <img src={BgImage} alt='Image' />
            </div>
        </div>
    )
}

export default HomePage