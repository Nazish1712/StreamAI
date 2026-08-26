import React from 'react'

const Button = ({name}) => {
  return (
  <button className="flex items-center justify-center px-1 py-0.5 md:px-2 md:py-1 bg-neutral-100 rounded-md border border-neutral-200 shadow-sm hover:bg-neutral-200  transition-all duration-200 cursor-pointer font-lato text-sm md:text-base font-medium
  whitespace-nowrap">{name}</button>
  )
}

export default Button