import React from 'react'
import pic from '../assets/images/reviews/about us.png'
import line from '../assets/images/reviews/Vector 216.svg'
import { reviews } from '../utils'


const Reviews = () => {
  return (
    <main className="flex items-center pt-[420px] px-4 md:px-16 bg-cream">
      <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col md:flex-row pt-8 gap-6 items-center px-6 ">
          <div>
            <h2 className="font-inter font-[400] text-[24px] md:text-[40px] leading-[32px] md:leading-[56px] text-main tracking-tight">
              We’re a <span className="font-[700]">family-run
                <img src={line} /></span> North East
              self storage company <br/>that’s rated 5 stars by our loyal customers
            </h2>
            <p className="pt-[24px] leading-[32px] text-[20px] md:text-[24px] font-[100] ">
              * Without the High Prices of National Chains
            </p>
          </div>

          <img
            src={pic}
            className="w-[340px] h-[227px] md:w-[361px] md:h-[241px]"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-x-[30px] gap-y-[16px] py-[60px] px-4 text-main">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-md  p-4 ">
              <div className="flex  items-center py-16px]">
                <h3 className="font-[700] font-helvetica text-[14px] leading-[20px] ">
                  {review.name}
                </h3>
                <img
                  src={review.img}
                  alt={review.name}
                  className="hidden md:flex w-[20px] h-[20px] pl-[8px]  "
                />
                <img
                  src={review.img}
                  alt={review.name}
                  className="hidden md:flex w-[20px] h-[20px] pl-[8px]  "
                />
                <img
                  src={review.img}
                  alt={review.name}
                  className="hidden md:flex w-[20px] h-[20px] pl-[8px]  "
                />
                <img
                  src={review.img}
                  alt={review.name}
                  className="hidden md:flex w-[20px] h-[20px] pl-[8px]  "
                />
                <img
                  src={review.img}
                  alt={review.name}
                  className="hidden md:flex w-[20px] h-[20px] pl-[8px]  "
                />
              </div>
              <p className="font-[400] font-inter text-[13px] leading-[20px] ">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <h3 className="py-[24px] leading-[32px] text-[24px] font-[400]">
          <span className="font-[700]">4.96</span> average rating across{' '}
          <span className="font-[700]">167</span> reviews{' '}
          <span className=" text-blue underline font-[400]">
            see all reviews
          </span>
        </h3>
      </div>
    </main>
  )
}

export default Reviews
