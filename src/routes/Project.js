import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import HeroImg from '../components/HeroImg'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Project." text="Web development is the building and maintenance of websites."/>
      <ProjectCard />
      <Skills />
      <Footer />
    </div>
  )
}

export default Project