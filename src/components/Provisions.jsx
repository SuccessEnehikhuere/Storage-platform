import React from 'react'
import frame from '../assets/images/provisions/frame.png'
import frame1 from '../assets/images/provisions/frame1.png'
import frame2 from '../assets/images/provisions/frame2.png'
import group from '../assets/images/provisions/group.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const Provisions = ({ text, main }) => {
  return (
    <main className="bg-white py-8 px-4 md:px-16 items-center">
      <div className="max-w-7xl mx-auto">
        <p className="font-[400] font-inter text-[18px] lg:text-[24px] leading-[28px] lg:leading-[32px] text-main pb-2">
          {text}
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="font-[700] font-helvetica text-[24px] md:text-[40px] leading-[32px] md:leading-[56px] text-main">
            {main}
          </h3>
          <div className="pt-4">
            <button
              className="flex items-center rounded-md cursor-pointer py-2 px-4 border custom-button-border font-helvetica font-[700] text-main gap-4"
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-12">
          <div className="w-full md:w-1/3">
            <img
              src={frame}
              alt="frame"
              className="md:w-full md:h-auto w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={frame1}
              alt="frame1"
              className="md:w-full md:h-auto w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/3">
            <img
              src={frame2}
              alt="frame2"
              className="md:w-full md:h-auto w-full h-auto"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={group}
            alt="group"
            className="md:max-w-full md:h-auto w-full h-auto py-10"
          />
        </div>
      </div>
    </main>
  )
}

export default Provisions
