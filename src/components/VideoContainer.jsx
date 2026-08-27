import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {

const [videos, setVideos] = useState([])

useEffect(() => {
   getVideos()
},[])

const getVideos = async () => {
   const data = await fetch(YOUTUBE_VIDEOS_API);
   const json = await data.json();
  
   setVideos(json.items)
}


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2">
      {videos.map((video)=>(
        <VideoCard key={video.id} info={video}/>
      ))}
      
    </div>
  )
}

export default VideoContainer