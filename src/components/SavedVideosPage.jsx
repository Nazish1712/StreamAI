import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IconBookmarkOff, IconTrash } from '@tabler/icons-react'
import { removeSavedVideo } from '../utils/saveVideoSlice'
import VideoCard from './VideoCard'

const SavedVideosPage = () => {
  const dispatch = useDispatch()
  const savedVideos = useSelector((store) => store.saved.items)

  // Empty state when no videos are saved
  if (!savedVideos || savedVideos.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[65vh] gap-4 text-center px-4">
        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400">
          <IconBookmarkOff className="w-10 h-10" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-lato">
          No saved videos yet
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
          Save your favorite videos while watching by clicking the Save button on the watch page.
        </p>
        <Link
          to="/"
          className="mt-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Explore Videos
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full p-4 md:p-6 max-w-7xl mx-auto font-lato">
      <div className="flex items-baseline justify-between mb-6 border-b border-gray-200 dark:border-gray-800 pb-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Saved Videos
        </h1>
        <span className="text-sm text-gray-500 font-medium">
          {savedVideos.length} {savedVideos.length === 1 ? 'video' : 'videos'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {savedVideos.map((video) => {
          const id = video?.id?.videoId || video?.id

          return (
            <div key={id} className="relative group/card">
              {/* Quick Remove Button Overlay */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  dispatch(removeSavedVideo(id))
                }}
                title="Remove from saved"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-red-600 text-white opacity-0 group-hover/card:opacity-100 transition-all duration-200 cursor-pointer shadow-md"
              >
                <IconTrash className="w-4 h-4" />
              </button>

              {/* Video Card Link */}
              <Link to={`/watch?v=${id}`}>
                <VideoCard info={video} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SavedVideosPage