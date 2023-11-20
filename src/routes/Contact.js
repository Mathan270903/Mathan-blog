import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import ContactPage from '../components/ContactPage'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="About." text="we're here for you."/>
      <ContactPage />
      <Footer />
    </div>
  )
}

export default Contact