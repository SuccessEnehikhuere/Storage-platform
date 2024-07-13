import React, { useState } from 'react'
import logo from '../assets/images/navbar/Logo.svg'
import { NavbarLinks } from '../utils'
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-custom-gradient px-8 w-full mx-auto">
      <div className="flex items-center justify-between py-8">
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* Medium to large screens */}
        <div className="hidden lg:flex gap-2">
          {NavbarLinks.map((link, index) => (
            <a
              key={index}
              className="font-inter font-[700] text-white leading-5 rounded-md py-2 px-3 hover:border custom-hover-border"
            >
              {link}
            </a>
          ))}

          <Button
            bg="white"
            text="Get a quote"
            width="89px"
            height="24px"
            color="main"
            gap="12px"
          />
        </div>

        {/* Hamburger menu for small screens */}
        <GiHamburgerMenu
          className="lg:hidden w-8 h-8 text-white cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed left-0 right-0 top-0 flex flex-col bg-custom-gradient px-4 pt-2 z-20 overflow-y-auto">
          <div className="flex justify-between items-center ">
             <img src={logo} alt="logo" />
            <FaTimes
              className="w-6 h-6 cursor-pointer text-white"
              onClick={closeMenu}
            />
          </div>
          <nav className="flex flex-col">
            {NavbarLinks.map((link, index) => (
              <a
                href='' 
                className="font-inter font-bold text-white leading-5 rounded-md py-2 px-4 hover:border custom-hover-border"
                key={index}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  )
}

export default Navbar
