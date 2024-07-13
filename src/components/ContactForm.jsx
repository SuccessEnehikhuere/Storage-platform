import React from 'react'
import profile from '../assets/images/killingworth/about.png'
import { FaArrowRightLong } from 'react-icons/fa6'

const ContactForm = () => {
  return (
    <main className="flex items-center bg-white mx-auto md:px-4 px-8 py-8 justify-center">
      <div className="p-10 ">
        <h2 className="font-helvetica font-[700] text-[20px] leading-[32px] md:text-[32px] md:leading-[40px] text-main text-center pt-10 pb-4">
          Have questions? Get in touch.
        </h2>
        <h3 className="font-inter font-[400] text-[20px] leading-[32px] md:text-[16px] md:leading-[24px] text-main text-center p-4">
          Fill in the form below and our friendly team will respond quickly
        </h3>
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center border custom-button-border p-4 gap-4 rounded-md">
            <img src={profile} alt="profile-pic" className="w-6 h-6" />
            <h4>Sarah, Customer Lead</h4>
          </div>
        </div>
        <form className="gap-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-main mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-light border custom-button-border w-full rounded-md p-3 mb-2 "
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-main mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-light border custom-button-border w-full rounded-md p-3 mb-2 "
          />
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-main mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-light border custom-button-border w-full rounded-md p-3 mb-2 "
          />
          <label
            htmlFor="message"
            className="block text-sm font-medium text-main mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="bg-light border custom-button-border w-full rounded-md p-3 mb-2  h-32 px-4 py-2 resize-vertical "
          />

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-auto flex items-center justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm gap-x-4 font-medium text-white bg-blue"
            >
              <span>Submit enquiry</span>
              <FaArrowRightLong />
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default ContactForm
