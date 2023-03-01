import React from 'react'
import '../reset.css'
import '../styles/Skills.css'

import html5 from '../assets/bxl-html5.svg'
import css3 from '../assets/bxl-css3.svg'
import javascript from '../assets/bxl-javascript.svg'
import reactjs from '../assets/bxl-react.svg'
import nodejs from '../assets/bxl-nodejs.svg'
import express from '../assets/bxl-express.svg'
import mongodb from '../assets/bxl-mongodb.svg'


function Skills() {
  return (
    <div>
      <section id="skills" className="skills-section">
        <div className="container-xl">
          <div className="section_title">
            <p>Skills</p>
            <h2>My TechStack</h2>
          </div>
          <div className="skill-items">
            <div className="container">
              <div className="row">
                <div className="col-sm text-center">
                  <img src={html5} alt="html5" />
                  <p>HTML</p>
                </div>
                <div className="col-sm text-center">
                  <img src={css3} alt="css3" />
                  <p>CSS</p>
                </div>
                <div className="col-sm text-center">
                  <img src={javascript} alt="javascript" />
                  <p>JavaScript</p>
                </div>
                <div className="col-sm text-center">
                  <img src={reactjs} alt="reactjs" />
                  <p>React</p>
                </div>
                <div className="col-sm text-center">
                  <img src={nodejs} alt="nodejs" />
                  <p>NodeJS</p>
                </div>
                <div className="col-sm text-center">
                  <img src={express} alt="nodejs" />
                  <p>Express</p>
                </div>
                <div className="col-sm text-center">
                  <img src={mongodb} alt="mongodb" />
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills