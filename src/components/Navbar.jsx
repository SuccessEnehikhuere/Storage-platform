import React, { useState } from 'react'
import logo from '../assets/images/navbar/Logo.svg'
import { NavbarLinks } from '../utils'
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi'

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
        <div className="lg:hidden flex flex-col  mt-4">
          {NavbarLinks.map((link, index) => (
            <a
              key={index}
              className="font-inter font-[700] text-white leading-5 rounded-md py-2 px-3 hover:border custom-hover-border"
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
          <Button
            bg="#FFCC80"
            text="Get a quote"
            width="89px"
            height="24px"
            color="main"
            gap="12px"
            onClick={closeMenu}
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar
