import React from 'react'
import { rates } from '../utils'

const Rates = ({ text }) => {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #FFF5E5)',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <main
      style={gradientStyle}
      className="bg-orange px-4 py-10 border md:px-16 text-main custom-button-border"
    >
      <h2 className="text-center text-[24px] leading-[32px] lg:text-[40px] lg:leading-[56px] font-inter pb-[40px]">
        {text}
        <br />
        <span className="font-[700]">5 stars </span>by our customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {rates.map((rate, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-4 border custom-button-border"
          >
            <div className="flex items-center">
              <h3 className="font-bold text-sm md:text-base mr-2">
                {rate.name}
              </h3>
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={rate.img}
                  alt={rate.name}
                  className="w-3 h-3 md:w-4 md:h-4"
                />
              ))}
            </div>
            <p className="text-sm md:text-base">{rate.text}</p>
          </div>
        ))}
      </div>
      <h3 className="py-[24px] leading-[32px] text-[24px] font-[400] text-center">
        <span className="font-[700]">4.96</span> average rating across{' '}
        <span className="font-[700]">167</span> reviews{' '}
        <span className="text-blue underline font-[400]">see all reviews</span>
      </h3>
    </main>
  )
}

export default Rates
