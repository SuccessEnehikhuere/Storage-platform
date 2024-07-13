import React from 'react'
import {
  Site,
  Navbar,
  KillingworthStorage,
  ContactForm,
  CustomHero,
  Footer,
  End,
  Provisions,
  Rates
} from '../components'

const Killingworth = () => {
  return (
    <>
      <Navbar />
      <CustomHero
        text="Self Storage Killingworth"
        text2="Over 20 years storage experience"
        textAlign="center"
      />
      <Site />
      <Provisions
        text="Why store with us?"
        main="We’re safe, easy & affordable"
      />
      <KillingworthStorage />
      <ContactForm />
      <Rates
        text=" A Killingworth self storage 
        location rated "
      />
      <Footer />
      <End />
    </>
  )
}

export default Killingworth
