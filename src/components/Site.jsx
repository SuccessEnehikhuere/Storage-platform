import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import map from '../assets/images/killingworth/Map.png'
import vector from '../assets/images/killingworth/vector.svg'
import group from '../assets/images/killingworth/group.png'
import { FaPlus } from 'react-icons/fa'
import Button from './Button'
import Vector from '../assets/images/killingworth/Vector 285.svg'
import Video from '../assets/images/killingworth/Video (2).png'

const Site = () => {
  return (
    <main className="relative flex items-center bg-cream mx-auto md:px-4 px-8 py-8 justify-center">
      <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row bg-white border custom-button-border p-2 rounded-lg gap-6">
        <div className="h-[194px] w-[289px] md:h-[214px] md:w-[320px]">
          <img src={Video} alt="video" />
        </div>
        <div className="flex  justify-center flex-col p-6">
          <div>
            <h2 className="font-helvetica md:text-[24px]   text-main font-[700] text-[18px] leading-[32px]">
              Why pay less for storage?
            </h2>
            <img src={Vector} alt="vector" />
          </div>
          <p className="font-inter text-[18px] md:text-[24px]   text-main font-[400] leading-[28px]">
            Watch this 2 minute video to learn <br />
            about our quality storage.
          </p>
        </div>
      </div>

      <div className="flex pt-80 lg:pt-60 flex-col ">
        <h2 className="font-helvetica text-[24px] md:text-[40px] leading-[32px] md:leading-[56px] text-center text-main py-5">
          About our Killingworth site
        </h2>

        <div className="flex w-full items-center justify-center">
          <div className="hidden md:flex bg-cover bg-centerrounded-md py-8 rounded-l-md">
            <img src={map} alt="map-image" className="h-[456px]" />
          </div>
          <div className="bg-white p-8 rounded-r-md border border-custom-button h-[456px]">
            <div className="flex gap-x-[16px]">
              <FiMapPin className="w-[16px] h-[20px] text-main" />
              <div>
                <h3 className="font-helvetica font-[700] text-[16px] leading-[24px] text-main ">
                  {' '}
                  Address:
                </h3>
                <h2 className="font-inter font-[400] text-[18px] leading-[28px]  md:text-[24px] md:leading-[32px] underline text-blue">
                  Littleburn Rd, Langley Moor,
                  <br /> Durham, DH7 8XD
                </h2>
                <p className="font-inter font-[400] text-[16px] leading-[24px] text-main pt-[16px] pb-[40px]">
                  2 minutes from the A167
                  <br /> 8 minutes away from Durham City Centre
                </p>
              </div>
            </div>

            <div className="flex gap-x-[16px]">
              <FaPhoneAlt className="w-[16px] h-[20px] text-main" />
              <div>
                <h3 className="font-helvetica font-[700] text-[16px] leading-[24px] text-main ">
                  {' '}
                  Phone:
                </h3>
                <h3 className="font-inter font-[400] text-[16px] leading-[24px] underline text-blue">
                  0191 300 65 65
                </h3>
              </div>
            </div>

            <div className="flex gap-x-[16px]">
              <MdOutlineMail className="w-[16px] h-[20px] text-main" />
              <div>
                <h3 className="font-helvetica font-[700] text-[16px] leading-[24px] text-main ">
                  {' '}
                  Email:
                </h3>
                <h3 className="font-inter font-[400] text-[16px] leading-[24px] underline text-blue">
                  info@paylessforstorage.co.uk
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-center font-helvetica font-[700] text-[16px] leading-[24px] text-main pb-6 pt-14">
              FAQs on our Killingworth Storage Units
            </h3>
            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md ">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                Do I need to buy my own lock?
              </span>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                What are the opening hours at the Killingworth site?
              </span>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                Are there any notice periods for giving up my unit?
              </span>
              <FaPlus />
            </div>
            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                How do I reserve a storage unit?
              </span>
              <FaPlus />
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-center font-helvetica font-[700] text-[16px] leading-[24px] text-main pb-6 pt-14">
              How to get to our Killingworth storage location
            </h3>
            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md ">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                Directions from Gosforth
              </span>
              <FaPlus />
            </div>

            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md ">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                Directions from Jesmond
              </span>
              <FaPlus />
            </div>

            <div className="flex items-center justify-between gap-x-[40px] bg-white border border-custom-button p-4 rounded-md ">
              <span className="font-helvetica font-[700] text-[16px] leading-[24px] text-main">
                Directions from the A1
              </span>
              <FaPlus />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 place-items-center bg-custom-gradient p-6 md:p-10 mt-8 rounded-md">
          <div className="hidden md:flex md:col-span-1">
            <img src={group} alt="a group image" />
          </div>
          <div className="flex flex-col items-center md:col-span-2">
            <div>
              <h2 className="font-helvetica font-[700] text-[18px] leading-[28px] md:text-[24px] md:leading-[32px] text-white text-center">
                Book online. Get access right away.
              </h2>
              <img
                src={vector}
                alt="vector"
                className="hidden md:flex absolute "
              />
            </div>

            <p className="font-inter font-[400] text-[16px] leading-[24px] md:text-[16px] md:leading-[24px] text-white text-center pt-6 ">
              Reserve online, setup payment & move into your storage unit.{' '}
              <br />
              We’ll show you our storage prices and availability.
            </p>
            <div className="border custom-border  rounded-md mt-6">
              <Button
                bg="transparent"
                text="Reserve online"
                width="166px"
                height="40px"
                color="white"
                gap="12px"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Site
