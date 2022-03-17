import React from 'react'
import  Reese from  "../../assests/Reese.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={Reese} download className="btn">Download Resume</a>
        <a href="#Contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA