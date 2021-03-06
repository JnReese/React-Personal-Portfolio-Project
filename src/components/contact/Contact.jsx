import React from 'react'
import './contact.css'
import {MdEmail} from "react-icons/md"
import {BsFillPhoneFill} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com' 

const Contact = () => {
  const form = useRef();  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8fu2hud', 'template_pjrzhs3', form.current, 'g0KSr9iQLO_S_VDO_')

        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <section id="Contact">
      <h5 className="adjust">Get In Touch</h5>
      <h2 className="adjust">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>jonreese777@gmail.com</h5>
              <a href="mailto:jonreese777@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsFillPhoneFill className='contact__option-icon'/>
              <h4>Text</h4>
              <h5>+8645535555</h5>
              <a href="tel:8645535555" target="_blank">Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder='Your Full Name' required/>
          <input type="text" name="email" placeholder="Your Email"  required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact