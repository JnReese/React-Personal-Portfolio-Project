import React from 'react'
import "./about.css" 
import ProPic from "../../assests/ProPic.png"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {AiOutlineFolderAdd} from "react-icons/ai"

const About = () => {
  return (
    <section id="About">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"> 
        <div className="about__me-image">
          <img src={ProPic} alt="about image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FiAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Student</small>
            </article>
            <article className="about__card">
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
            <AiOutlineFolderAdd className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed Projects</small>
            </article>
          </div>
        </div>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem eos molestias odit ut provident distinctio! Nemo qui tempora harum reprehenderit error nam et neque quod at asperiores? Neque, in?
       </p>
       <a href="#contact" className="btn btn-primary">Let's Talk</a>

      </div>
    </section>
  )
}

export default About