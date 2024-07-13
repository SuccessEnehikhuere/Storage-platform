import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = ({ text, width, height, bg, color, gap }) => {
  return (
    <div>
      <button
        className={`flex items-center rounded-md cursor-pointer py-2 px-3 border custom-button-border font-helvetica font-[700] text-${color} bg-${bg} w-[${width}] h-[${height}]`}
        style={{ gap: gap }}
      >
        {text}
        <FaArrowRightLong />
      </button>
    </div>
  )
}

export default Button
