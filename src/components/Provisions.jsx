import React from 'react'
import Button from './Button'
import frame from '../assets/images/provisions/frame.png'
import frame1 from '../assets/images/provisions/frame1.png'
import frame2 from '../assets/images/provisions/frame2.png'
import group from '../assets/images/provisions/group.png'
import about from '../assets/images/provisions/About.png'

const Provisions = () => {
  return (
    <main className="bg-white py-8 px-4 md:px-16 items-center">
      <p className="font-[400] font-inter text-[18px] md:text-[24px] leading-[28px] md:leading-[32px] text-main pb-2">
        Why store with us?
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <h3 className="font-[700] font-helvetica text-[24px] md:text-[40px] leading-[32px] md:leading-[56px] text-main">
          We’re safe, easy & affordable
        </h3>
        <Button
          bg="brown"
          text="Get a quote"
          width="156px"
          height="40px"
          color="main"
          gap="16px"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-y-[20px] gap-x-[20px] pt-12">
        <div className="md:w-[360px] md:h-[469px] w-[340px] h-[465px]">
          <img src={frame} alt="" />
        </div>
        <div className="md:w-[360px] md:h-[469px] w-[340px] h-[465px]">
          <img src={frame1} alt="" />
        </div>
        <div className="md:w-[360px] md:h-[469px] w-[340px] h-[465px]">
          <img src={frame2} alt="" />
        </div>
      </div>

      <div className="md:w-[1140px] md:h-[348px] w-[338px] h-[420px] py-10">
        <img src={group} alt="group image" />
      </div>
    </main>
  )
}

export default Provisions