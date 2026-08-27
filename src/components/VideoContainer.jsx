import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

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


return(
  videos.length === 0 ?  (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-45 px-6">
  {Array(10).fill("").map((_, index) => (
     <Shimmer key={index}/>
  ))}
</div>
) :(
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-2 gap-4">
      {videos.map((video)=>(
       <Link key={video.id} to={"/watch?v"+video.id}> <VideoCard  info={video}/></Link>
      ))}
      
    </div>
)

    
  )
}

export default VideoContainer