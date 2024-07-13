import React from 'react'
import {
  CustomHero,
  Navbar,
  LocationFinder,
  Reviews,
  Storage,
  Provisions,
  About,
  Rates,
  Footer,
  End,
} from '../components'

const Home = () => {
  return (
    <>
      <Navbar />
      <CustomHero
        text="Self Storage 
"
        mini=" Newcastle & the North East"
      />
      <LocationFinder />
      <Reviews />
      <Storage />
      <Provisions
        text="Why store with us?"
        main="We’re safe, easy & affordable"
      />
      <About />
      <Rates text=" Self storage rated " />
      <Footer />
      <End />
    </>
  )
}

export default Home
