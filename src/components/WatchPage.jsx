import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

const [searchParams, useSearchParams] = useSearchParams()

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(closeSidebar())
},[])

  return (
    <div>WatchPage</div>
  )
}

export default WatchPage