import { Link } from 'react-router-dom'
import './ProjectCardStyles.css'

import React from 'react'

const ProjectCard = () => {
  return (
    <div className='projects'>
        <h2>Projects</h2>
        <div className='project'>
            <div className='project-card'>
                <h1>Portfolio Websites</h1>
                <p>Lorem Ipsum, sometimes referred to as lipsum, is the placeholder text used in design when creating content. It helps designers plan out where the content will sit.</p>
                <Link to="https://github.com/Mathan270903" className='view'>View</Link>
            </div>

            <div className='project-card'>
                <h1>Business Websites</h1>
                <p>Lorem Ipsum, sometimes referred to as lipsum, is the placeholder text used in design when creating content. It helps designers plan out where the content will sit.</p>
                <Link to="https://github.com/Mathan270903" className='view'>View</Link>
            </div>

            <div className='project-card'>
                <h1>Pharmacy Websites</h1>
                <p>Lorem Ipsum, sometimes referred to as lipsum, is the placeholder text used in design when creating content. It helps designers plan out where the content will sit.</p>
                <Link to="https://github.com/Mathan270903" className='view'>View</Link>
            </div>

            <div className='project-card'>
                <h1>ECommerce Websites</h1>
                <p>Lorem Ipsum, sometimes referred to as lipsum, is the placeholder text used in design when creating content. It helps designers plan out where the content will sit.</p>
                <Link to="https://github.com/Mathan270903" className='view'>View</Link>
            </div>

            <div className='project-card'>
                <h1>Blog Websites</h1>
                <p>Lorem Ipsum, sometimes referred to as lipsum, is the placeholder text used in design when creating content. It helps designers plan out where the content will sit.</p>
                <Link to="https://github.com/Mathan270903" className='view'>View</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard