import React from 'react'
import about from '../assets/images/provisions/About.png'
import mobileAbout from '../assets/images/provisions/About2.png'

const About = () => {
  return (
    <div className='py-40 md:py-20 md:px-12 mx-auto flex items-center'>
      <div className="hidden md:flex items-center justify-center w-[1146px]  h-[569px]">
        <img src={about} alt="about image" />
      </div>

      <div className="flex md:hidden items-center justify-center w-full h-[200px] ">
        <img src={mobileAbout} alt="about image" />
      </div>
    </div>
  )
}

export default About
