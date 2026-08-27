import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import SlideSidebar from './SlideSidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex relative items-start">
        <SlideSidebar/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body