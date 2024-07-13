import React from 'react'
import group from '../assets/images/killingworth/Group (1).png'
import padlock from '../assets/images/killingworth/padlock.svg'
import secure from '../assets/images/killingworth/secure.svg'
import van from '../assets/images/killingworth/van.svg'
import Video from '../assets/images/killingworth/Video.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa'

const KillingworthStorage = () => {
  return (
    <main className="flex items-center justify-center mx-auto bg-cream">
      <div className="">
        <h1 className="font-helvetica font-[700] text-[20px] leading-[32px] md:text-[32px] md:leading-[40px] text-main text-center pt-10 pb-4">
          Our Killngworth Storage Units
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-4">
          <div className="bg-white rounded-[12px] border custom-button-border p-10 ">
            <h1 className="font-helvetica font-[700] text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] text-main text-center py-2">
              20ft Storage Container
            </h1>
            <h3 className="font-inter font-[400] text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] text-main text-center pb-4">
              £135 per month (inc VAT)
            </h3>
            <div className="flex items-center justify-center">
              <img
                src={group}
                alt="van"
                className="h-[152.84px] w-[230px] md:h-[200px] md:w-[300.95px] "
              />
            </div>

            <div>
              <div className="flex items-center  gap-6 pb-2">
                <img
                  src={van}
                  alt="van"
                  className="h-[48px] w-[48px] md:h-[44.27px] md:w-[44.27px]"
                />
                <h3 className="font-inter font-[400] text-[16px] leading-[24px] text-main">
                  Car / Van access
                </h3>
              </div>
              <div className="flex items-center  gap-6 pb-2">
                <img
                  src={secure}
                  alt="security"
                  className="h-[48px] w-[48px] md:h-[44.27px] md:w-[44.27px]"
                />
                <h3 className="font-inter font-[400] text-[16px] leading-[24px] text-main">
                  High security lock
                </h3>
              </div>
              <div className="flex items-center  gap-6 pb-2">
                <img
                  src={padlock}
                  alt="padlock"
                  className="h-[48px] w-[48px] md:h-[44.27px] md:w-[44.27px]"
                />
                <h3 className="font-inter font-[400] text-[16px] leading-[24px] text-main">
                  Very popular – house garage size
                </h3>
              </div>
            </div>

            <button
              className="flex items-center rounded-md cursor-pointer py-2 px-6 border custom-button-border font-helvetica font-[700] text-main gap-4 text-center mt-4"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #FFE0B2 0%, #FFCC80 100%)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              Reserve Online
              <FaArrowRightLong />
            </button>
          </div>

          <div>
            <h2 className="font-helvetica font-[700] text-[16px] leading-[24px] text-main text-center py-4">
              See how much your can fit into this storage unit:
            </h2>
            <img
              src={Video}
              alt="vidoe-image"
              className="h-[225px] w-[341px] md:h-[372px] md:w-[562px]"
            />
            <h3 className="font-helvetica font-[700] text-[16px] leading-[24px] text-main text-center pt-6 ">
              Who stores with us?
            </h3>
            <div className="p-4">
              <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md mb-4">
                <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                  Household storage
                </span>
                <FaPlus />
              </div>
              <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md ">
                <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                  Business storage
                </span>
                <FaPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default KillingworthStorage