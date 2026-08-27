import React from 'react'
import Button from './Button'
import { useRef } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { buttonListNames } from '../utils/button-data'

const ButtonList = () => {

const scrollRef = useRef(null)

const scrollLeft = () => {
   if(scrollRef.current) {
      scrollRef.current.scrollBy({left:-200, behavior:"smooth"})
   }
  }

const scrollRight = () => {
  if(scrollRef.current){
    scrollRef.current.scrollBy({left:200, behavior:"smooth"})
  }
}

  return (
    <div className="relative flex items-center w-full">

      <button 
      onClick={()=>(scrollLeft())}
      className="absolute left-0 z-10 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full shadow-sm hover:bg-neutral-100 cursor-pointer">
        <IconChevronLeft className='w-4 h-4 md:w-5 md:h-5 text-gray-700'/>
      </button>

    <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth px-8 md:px-10 py-2 w-full custom-scrollbar-hide">
      {buttonListNames.map((name, index)=>(
        <Button key={index} name={name}/>
      ))}
      
      </div>

      <button
      onClick={()=>(scrollRight())}
      className="absolute right-0 z-10 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white/90 rounded-full shadow-sm hover:bg-neutral-100 cursor-pointer"
      >
        <IconChevronRight className='w-4 h-4 md:w-5 md:h-5 text-gray-700'/>
      </button>

      </div>
  )
}

export default ButtonList