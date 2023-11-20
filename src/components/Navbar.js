import './NavbarStyles.css'

import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClicked = () => setClick(!click);

    const [color, setColor] = useState(false)
    const colorChange = () => {
        if(window.scrollY > 0) {
            setColor(true)
        }

        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll',colorChange);

    return (
        <div className={color ? "navbar navbar-bg" : "navbar"}>
            <div className='logo'>
                <h1>Freelancer.</h1>
            </div>
            <ul className={click ? 'lists active' : 'lists'}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClicked}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
}

export default Navbar