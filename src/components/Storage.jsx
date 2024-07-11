import React from 'react'
import home from '../assets/images/reviews/home.png'
import panel from '../assets/images/reviews/panel.png'
import vector from '../assets/images/reviews/vector.svg'
import Cta from '../assets/images/reviews/CTA.png'
import Frame from '../assets/images/reviews/Frame.png'

const Storage = () => {
  return (
    <main className="bg-cream py-8 border border-button-custom">
      <div className="flex items-center flex-col ">
        <div>
          <h2 className="font-helvetica text-[24px] md:text-[40px] leading-[32px] md:leading-[56px] text-main font-[700] ">
            I’m looking for
          </h2>

          <img
            src={vector}
            className="absolute md:w-[146px] md:h-[8px] w-[87.44px] h-[6.9px]"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-y-[30px] gap-x-[30px] pt-12">
          <div>
            <img src={home}  />
          </div>
          <div>
            <img src={panel} />
          </div>
        </div>

        <div className='py-12'> 
          <img src={Cta} className="hidden md:flex" />
          <img src={Frame} className="flex md:hidden w-[600px] max-w-full" />
        </div>
      </div>
    </main>
  )
}

export default Storage