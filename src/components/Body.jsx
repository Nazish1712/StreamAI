import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import SlideSidebar from './SlideSidebar'

const Body = () => {
  return (
    <div className="flex relative items-start">
        <SlideSidebar/>
        <Sidebar/>
        <MainContainer/>
    </div>
  )
}

export default Body