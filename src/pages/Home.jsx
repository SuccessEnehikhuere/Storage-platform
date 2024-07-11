import React from 'react'
import { Navbar, Hero, LocationFinder, Reviews, Storage, Provisions, About, Rates, Footer, End } from '../components'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LocationFinder/>
      <Reviews/>
      <Storage />
      <Provisions />
      <About/>
      <Rates/>
      <Footer/>
      <End/>
    </>
  )
}

export default Home
