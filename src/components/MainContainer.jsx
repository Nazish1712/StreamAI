import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="py-3 md:p-3 flex-1 min-w-0 w-full overflow-hidden">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer