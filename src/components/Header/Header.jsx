import React from 'react'
import './header.css'
import CTA from './CTA' 
import ReeseProfile from "../../assests/ReeseProfile.png"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Jon Reese</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
        <img src={ReeseProfile} alt="proile pic" />
        </div>
        <a href="#Contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header