import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience">
     
      <h5 className="skills">Skills</h5>
      <h2>My Experience</h2>
    

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__detail-icon" />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__detail-icon" />
            <div>
            <h4>CSS</h4>
            <small className="text-light">Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__detail-icon" />
            <div>
            <h4>JS</h4>
            <small className="text-light">Intermidiate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__detail-icon" />
            <div>
            <h4>React</h4>
            <small className="text-light">Intermidiate</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
