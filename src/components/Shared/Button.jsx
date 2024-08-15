import React from 'react'

const Button = ({ text, bgColor, 
    textColor, handler = () => {} }) => {
  return (
    <button
    onClick={handler}
    className={`${bgColor} ${textColor}
    cursor-pointer hover:scale-105 w-full
    duration-300 py-2 px-8 rounded-full
    relative z-10 focus:outline-none focus:ring-4 focus:ring-indigo-600
    focus:ring-opacity-50 transition-all`}>{text}</button>
  )
}

export default Button