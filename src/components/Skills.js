import './SkillsStyles.css'

import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
      <h1 className='heading'>Skills</h1>
      <div className='Skillset'>
        <div className='frameworks'>
          <h2>Frameworks/Libraries</h2>
          <div className='skill'>
            <p>React Js</p>
            <p>Bootstrap</p>
            <p>SASS</p>
            <p>RestAPI</p>
            <p>Laravel</p>
          </div>
        </div>
        <div className='frameworks'>
          <h2>Programming Languages</h2>
          <div className='skill'>
            <p>C</p>
            <p>Python</p>
            <p>Javascript</p>
            <p>PHP</p>
            <p>C Sharp</p>
          </div>
        </div>

        <div className='frameworks'>
          <h2>Tools</h2>
          <div className='skill'>
            <p>Gitgub</p>
            <p>Visualstudio code</p>
            <p>Photoshop</p>
            <p>Colab</p>
            <p>XAMPP</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills