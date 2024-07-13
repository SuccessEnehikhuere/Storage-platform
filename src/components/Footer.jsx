import React from 'react'
import Text from './Text'
import star from '../assets/images/reviews/Star.svg'
import logo from '../assets/images/footer/logo.png'
import group from '../assets/images/footer/Group.png'

const Footer = () => {
  return (
    <main className="flex items-center py-10 mx-auto px-8">
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <div className="hidden lg:flex flex-col justify-between">
          <img src={logo} alt="logo" className="w-[143px] h-[82px]" />
          <img src={group} alt="logo" className="w-[120px] h-[42px]" />
        </div>
        <div className="pb-4 lg:pb-0">
          <Text
            text="Locations"
            msg="Storage Brunswick"
            msg1="Storage Byker"
            msg2="Storage Durham"
            msg3="Storage Killingworth"
            msg4="Storage Morpeth"
            msg5="Storage Washington"
          />
        </div>

        <div className="pb-4 lg:pb-0">
          <Text
            text="About Pay Less"
            msg="Household Storage"
            msg1="Business Self Storage"
            msg2="Self Storage Tips & Ideas"
            msg3="FAQs"
            msg4="Containers for Sale"
            msg5="Containers for Hire"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-main font-[700] font-helvetica text-[14px] leading-[20px] pb-[14px]">
            Contact Us
          </h3>
          <p className="text-blue font-[400] font-inter text-[13px] leading-[16px] pb-[14px]">
            Enquiries{' '}
            <span className="text-blue uderline">0191 743 9158 0191 </span>
          </p>
          <p className="text-blue underline font-[400] font-inter text-[13px] leading-[16px] pb-[14px]">
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

        <div className="flex lg:hidden">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </main>
  )
}

export default Footer
