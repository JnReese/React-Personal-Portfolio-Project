import React from 'react'
import './nav.css'
import {AiTwotoneHome} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {BiBookAlt} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {AiOutlineContacts} from "react-icons/ai"
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  const [navscroll, setNavScroll] = useState("")
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setNavScroll("#")
    }
    else if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
      setNavScroll("")
    }
};
  

  return (
    <nav className={navscroll === "#" ? "bottom" : "" } >
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === "#" ? 'active' : ""}><AiTwotoneHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === "#About" ? 'active' : ""}><FiUser/></a>
      <a href="#Experience"  onClick={() => setActiveNav('#Experience')} className={activeNav === "#Experience" ? 'active' : ""}><BiBookAlt/></a>
      <a href="#Services"  onClick={() => setActiveNav('#Services')} className={activeNav === "#Services" ? 'active' : ""}><RiServiceLine/></a>
      <a href="#Contact"  onClick={() => setActiveNav('#Contact')} className={activeNav === "#Contact" ? 'active' : ""}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav