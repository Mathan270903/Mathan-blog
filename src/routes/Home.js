import React from 'react'

import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <HomePage />
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Home