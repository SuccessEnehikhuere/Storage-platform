import React from 'react'
import Text from './Text'
import star from '../assets/images/reviews/Star.svg'
import logo from '../assets/images/navbar/Logo.svg'
import logo2 from '../assets/images/navbar/Logo (2).svg'

const Footer = () => {
  return (
    <main className="flex items-center py-10 mx-auto px-8">
      <div className="grid grid-cols-3 md:grid-cols-5">
        <div className="flex flex-col">
          <img src={logo} alt="logo" className="w-[165px] h-[2px]" />
          <img src={logo2} alt="logo" />
        </div>

        <Text
          text="Locations"
          msg="Storage Brunswick"
          msg1="Storage Byker"
          msg2="Storage Durham"
          msg3="Storage Killingworth"
          msg4="Storage Morpeth"
          msg5="Storage Washington"
        />

        <Text
          text="About Pay Less"
          msg="Household Storage"
          msg1="Business Self Storage"
          msg2="Self Storage Tips & Ideas"
          msg3="FAQs"
          msg4="Containers for Sale"
          msg5="Containers for Hire"
        />

        <div className="flex flex-col">
          <h3 className="text-main font-[700] font-helvetica text-[14px] leading-[20px] pb-[14px]">
            Contact Us
          </h3>
          <p className="text-blue font-[400] font-inter text-[13px] leading-[16px] pb-[14px]">
            Enquiries{' '}
            <span className="text-blue uderline">0191 743 9158 0191 </span>
          </p>
          <p className='text-blue underline font-[400] font-inter text-[13px] leading-[16px] pb-[14px]'>
            Support{' '}
            <span className="text-blue uderline">0191 743 9158 0191 </span>
          </p>
        </div>

        <div>
          <h3 className='"text-main font-[700] font-helvetica text-[14px] leading-[20px] pb-[14px]'>
            Reviews
          </h3>
          <div className="flex gap-2">
            <img src={star} alt="star-reviews" />
            <img src={star} alt="star-reviews" />
            <img src={star} alt="star-reviews" />
            <img src={star} alt="star-reviews" />
            <img src={star} alt="star-reviews" />
          </div>
          <h3 className=" leading-[32px] text-[13px] font-[400] font-inter ">
            <span className="font-[700]">4.96</span> average rating across{' '}
            <span className="font-[700]">167</span> reviews{' '}
            <span className=" text-blue underline font-[400]">
              see all reviews
            </span>
          </h3>
        </div>

        <div></div>
      </div>
    </main>
  )
}

export default Footer