import React from 'react'

const VideoCard = ({info}) => {
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet
  
  return (
    <div className="flex flex-col w-full cursor-pointer group mb-6 hover:bg-neutral-200 rounded-t-xl">
      <div className="w-full">
        <img 
          src={thumbnails.medium.url} 
          alt="video-thumbnail" 
          className="w-full aspect-video object-cover rounded-xl transition-all duration-200"
        />
      </div>
      <div className="flex gap-3 px-1 mt-3">
        <div className="shrink-0">
          <img 
            src={thumbnails.default.url} 
            alt="channel-image"
            className="w-9 h-9 rounded-full object-cover mt-0.5"
          />
        </div>
        <div className="flex flex-col pr-4">
          <h3 className="font-semibold text-base text-gray-900 line-clamp-2 leading-snug font-lato">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {channelTitle}
          </p>
          <p className="text-sm text-gray-600">
            {statistics.viewCount} views
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default VideoCard