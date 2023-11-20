import './ContactPageStyles.css'
import ContactImg from '../assets/1.webp'

import React from 'react'

const ContactPage = () => {
  return (
    <div className='contact-page'>
        <h1>Contact Us</h1>
        <div className='contact'>

            <div className='images'>
                <img src={ContactImg} alt='Image' />
            </div>

            <form className='form'>
                <label>Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Phone No</label>
                <input type='number'></input>
                <label>Message</label>
                <textarea type='text'></textarea>
                <button>Submit</button>
            </form>

            
        </div>
    </div>
  )
}

export default ContactPage