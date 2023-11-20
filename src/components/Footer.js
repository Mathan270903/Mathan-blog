import './FooterStyles.css'

import React from 'react'
import { FaFacebook,FaHome, FaTwitter, FaLinkedin, FaPhone, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='left'>
                <div className='social'>
                    <FaHome size={20} style={{ color: "#fff" }} />
                    <p>100, ABC Street<br/> Thoothukudi </p>

                </div>
                <div className='social'>
                    <FaPhone size={20} style={{ color: "#fff" }} />
                    <p>+91 9876543210</p>
                </div>
                <div className='social'>
                    <FaMailBulk size={20} style={{ color: "#fff" }} />
                    <p>testmyself0202@gmail.com</p>
                </div>
            </div>

            <div className='right'>
                <h2>About the company</h2>
                <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.</p>
                <div className='footer-social'>
                    <FaFacebook size={20} style={{ color: "#fff" }} />
                    <FaTwitter size={20} style={{ color: "#fff" }} />
                    <FaLinkedin size={20} style={{ color: "#fff" }} />
                </div>
            </div>
        </div>
    )
}

export default Footer