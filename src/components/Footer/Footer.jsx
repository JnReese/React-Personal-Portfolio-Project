import React from 'react'
import './footer.css'
import {HiSpeakerphone} from "react-icons/hi"

const Footer = () => {
  return (
    <section id="Footer">
      <footer>
        <div className="footer__container">
        <ul className="permalinks">
            <li><HiSpeakerphone/> </li>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        </div>

      </footer>
    </section>
  )
}

export default Footer