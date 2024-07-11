import React from 'react'
import logo from '../assets/images/navbar/Logo.svg'
import { NavbarLinks } from '../utils'
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className="bg-custom-gradient h-[88px] py-6 px-[70px] flex items-center mx-auto">
      {/* <div className="flex items-center justify-center gap-x-[271px]">
        <div className="w-[124.76px] md:w-[124px] h-8">
          <img src={logo} />
        </div> */}
        {/*MEDIU TO LARGE SCREEN*/}
        {/* <div className="hidden md:flex text-[16px] gap-x-4 text-nowrap cursor-pointer">
          {NavbarLinks.map((link, index) => {
            return (
              <a
                key={index}
                className="font-inter font-[700] text-white leading-5 rounded-md py-2 px-3 hover:border custom-hover-border"
              >
                {link}
              </a>
            )
          })}

          <Button
            bg="white"
            text="Get a quote"
            width="89px"
            height="24px"
            color="main"
            gap="12px"
          />
        </div> */}

        {/*SMALL SCREEN*/}
        {/* <GiHamburgerMenu className='flex md:hidden'/>
      </div> */}
    </nav>
  )
}

export default Navbar
