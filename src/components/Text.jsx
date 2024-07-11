import React from 'react'

const Text = ({text, msg, msg1,msg2,msg3,msg4,msg5,msg6}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-main font-[700] font-helvetica text-[14px] leading-[20px] pb-[14px]">
        {text}
      </h3>
      <p className="text-blue text-[13px] leading-[20px]  md:leading-[16px] font-inter [400]  underline pb-[6px]">
        {msg}
      </p>
      <p className="text-blue text-[13px] leading-[20px]  md:leading-[16px] font-inter [400]  underline pb-[6px]">
        {msg1}
      </p>
      <p className="text-blue text-[13px] leading-[20px]  md:leading-[16px] font-inter [400]  underline pb-[6px]">
        {msg2}
      </p>
      <p className="text-blue text-[13px] leading-[20px]  md:leading-[16px] font-inter [400]  underline pb-[6px]">
        {msg3}
      </p>
      <p className="text-blue text-[13px] leading-[20px]  md:leading-[16px] font-inter [400]  underline pb-[6px]">
        {msg4}
      </p>
      <p className="text-blue text-[13px] leading-[20px]  md:leading-[16px] font-inter [400]  underline pb-[6px]">
        {msg5}
      </p>
    </div>
  )
}

export default Text