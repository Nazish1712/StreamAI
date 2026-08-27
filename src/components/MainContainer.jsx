import React, { useEffect} from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../utils/appSlice'

const MainContainer = () => {

const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(openSidebar())
  },[])
  return (
    <div className="py-3 md:p-3 flex-1 min-w-0 w-full overflow-hidden">
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer