import React from 'react'
import cityImage from '../assets/images/hero/city.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const CustomHero = ({ text, mini, textAlign = 'left', text2 }) => {
  const textAlignClass = textAlign === 'left' ? 'text-left' : 'text-center'

  return (
    <main className="bg-custom-gradient mx-auto pt-16 md:pt-32 px-6 md:px-16">
      <h2
        className={`text-2xl md:text-6xl text-white font-bold md:leading-tight pb-10 md:pb-16 ${textAlignClass}`}
      >
        {text} <br />
        {mini}
      </h2>
      {text2 && (
        <h3 className="font-inter font-[400] text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] text-center text-white">
          {text2}
        </h3>
      )}
      <div
        className="h-44 md:h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${cityImage})`,
        }}
      >
        <div className="absolute   left-[32px] md:left-[70px]">
          <button
            className="flex items-center justify-center rounded-md cursor-pointer py-2 px-3 border custom-button-border font-helvetica font-[700] text-main gap-2 md:gap-4"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #FFE0B2 0%, #FFCC80 100%)',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            Get a quote
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </main>
  )
}

export default CustomHero
