import React from 'react'

const VideoCard = ({info}) => {
  console.log(info)
  
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet
  
  return (
        <div className="">
          <img src={thumbnails.high.url} alt="video-thumbnail" className=""></img>
        </div>
  )
}

export default VideoCard