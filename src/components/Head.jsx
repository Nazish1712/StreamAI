import React ,{useEffect, useState} from 'react'
import { IconMenu2 , IconMovie, IconUserCog, IconSearch} from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constants'

const Head = () => {

const [searchQuery, setSearchQuery] = useState("")

const [suggestions, setSuggestions] = useState([])

const [showSuggestions, setShowSuggestions] = useState(false)

useEffect(()=>{
  
    const timer = 
    setTimeout(()=> {
      if(searchQuery.trim() !== ""){
      getSearchSuggestions()
      } else{
         setSuggestions([])
      }
     }, 200)
  
   return () => {
     clearTimeout(timer)
   }

  },[searchQuery])

const getSearchSuggestions = async () => {
   try{const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
   const json = await data.json() 
   setSuggestions(json[1])
  }
   catch(error){
    console.error("Failed to fetch suggestions:", error);
   }
  }

const dispatch = useDispatch()

const toggleMenuHandler = () => {
  dispatch(toggleMenu())
}
  
  return (
    <div className="flex justify-between items-center px-0.5 sm:px-1 md:px-5  dark:bg-gray-900  py-1 md:py-2 lg:py-3 bg-neutral-50 shadow-sm rounded-tl-4xl rounded-r-4xl sticky top-0 z-50">
      <div className="flex justify-between gap-1 md:gap-2 lg:gap-3">
      <IconMenu2 className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-800  dark:text-neutral-100 cursor-pointer' onClick={() => toggleMenuHandler()}/>
      <Link to="/" className="flex items-center md:gap-0.5" >
      <IconMovie className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-500 cursor-pointer'/>
      <h1 className="hidden md:flex md:text-lg lg:text-xl lg:font-base text-gray-800 dark:text-neutral-100 font-russo cursor-pointer">Stream<span className="lg:font-bold">AI</span></h1>
      </Link>
      </div>
      
      <div className='relative flex items-center gap-0.5 md:gap-1 bg-white dark:bg-gray-600   px-0.5 md:px-1 py-0.5 w-full max-w-[288px] md:max-w-96 lg:max-w-2xl rounded-full border border-gray-300 dark:border-gray-700'>
        <input type="text"  placeholder="Search for videos" className='w-full text-sm 
        md:text-base rounded-full pl-2 focus:outline-none placeholder:font-inter 
        placeholder:text-sm md:placeholder:text-base'
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=> setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        ></input>
        <button className='bg-neutral-50 dark:bg-gray-700 rounded-r-full p-1 md:p-1.5 cursor-pointer'>
          <IconSearch className='w-5 h-5 md:w-6 md:h-6 text-gray-600 dark:bg-gray-600'/>
        </button>
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-3 z-50">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => setSearchQuery(suggestion)}
                  className="flex items-center gap-3 px-4 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-neutral-100 text-sm md:text-base font-medium"
                >
                  <IconSearch className="w-4 h-4 text-gray-500" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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