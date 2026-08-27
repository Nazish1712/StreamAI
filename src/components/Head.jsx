import React from 'react'
import { IconMenu2 , IconMovie, IconUserCog, IconSearch} from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
const dispatch = useDispatch()

const toggleMenuHandler = () => {
  dispatch(toggleMenu())
}
  
  return (
    <div className="flex justify-between items-center px-0.5 sm:px-1 md:px-5  dark:bg-gray-900  py-1 md:py-2 lg:py-3 bg-neutral-50 shadow-sm rounded-tl-4xl rounded-r-4xl sticky top-0 z-50">
      <div className="flex justify-between gap-1 md:gap-2 lg:gap-3">
      <IconMenu2 className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-800  dark:text-neutral-100 cursor-pointer' onClick={() => toggleMenuHandler()}/>
      <div className="flex items-center md:gap-0.5" >
      <IconMovie className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-500 cursor-pointer'/>
      <h1 className="hidden md:flex md:text-lg lg:text-xl lg:font-base text-gray-800 dark:text-neutral-100 font-russo cursor-pointer">Stream<span className="lg:font-bold">AI</span></h1>
      </div>
      </div>
      
      <div className='flex items-center gap-0.5 md:gap-1 bg-white dark:bg-gray-600   px-0.5 md:px-1 py-0.5 w-full max-w-[288px] md:max-w-96 lg:max-w-2xl rounded-full border border-gray-300 dark:border-gray-700'>
        <input type="text" placeholder="Search for videos" className='w-full rounded-full p-0.5 focus:outline-none placeholder:font-inter 
        placeholder:text-sm md:placeholder:text-base'></input>
        <button className='bg-neutral-50 dark:bg-gray-700 rounded-r-full p-1 md:p-1.5 cursor-pointer'>
          <IconSearch className='w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:bg-gray-600'/>
        </button>
      </div>
      <div className='flex items-center justify-center cursor-pointer'>
         <img src="/photo-1.webp" 
         alt="User-profile"
         className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border-2 border-gray-600 dark:bg-neutral-500"></img>
      </div>
    </div>

    
  )
}

export default Head