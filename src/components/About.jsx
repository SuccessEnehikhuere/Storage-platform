import React from 'react'
import about from '../assets/images/provisions/About.png'
import mobileAbout from '../assets/images/provisions/About2.png'

const About = () => {
  return (
    <div className="flex items-center py-8 md:py-20 px-4 md:px-16">
      {/* Desktop view */}
      <div className="hidden md:flex items-center justify-center w-full">
        <img src={about} alt="about image" className="max-w-full h-auto" />
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden items-center justify-center w-full">
        <img
          src={mobileAbout}
          alt="mobile about image"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default About
