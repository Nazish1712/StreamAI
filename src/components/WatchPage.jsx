import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import { 
  IconThumbUp, 
  IconThumbDown, 
  IconShare, 
  IconBookmark, 
  IconBookmarkFilled, 
  IconCheck, 
  IconThumbUpFilled, 
  IconThumbDownFilled 
} from '@tabler/icons-react'
import { GOOGLE_API_KEY } from '../utils/constants'
import { motion, AnimatePresence } from 'framer-motion'
import CommentContainer from './CommentContainer'
import { addSavedVideo, removeSavedVideo } from '../utils/saveVideoSlice'
import LiveChat from './LiveChat'

const formatCount = (count) => {
  if (!count) return "0";
  if (count >= 1000000) return (count / 1000000).toFixed(1) + 'M';
  if (count >= 1000) return (count / 1000).toFixed(1) + 'K';
  return count;
};

const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("v")
  const dispatch = useDispatch()
  
  const [videoInfo, setVideoInfo] = useState(null)
  const [channelInfo, setChannelInfo] = useState(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const savedVideos = useSelector((store) => store.saved.items)
  const isSaved = savedVideos.some((item) => item.id === videoId)

  useEffect(() => {
    dispatch(closeSidebar())
    if (videoId) {
      getVideoAndChannelDetails()
    }
  }, [videoId])

  const getVideoAndChannelDetails = async () => {
    try {
      const videoData = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
      )
      const videoDataJson = await videoData.json()
      const videoResult = videoDataJson.items?.[0]
      setVideoInfo(videoResult)

      if (videoResult?.snippet?.channelId) {
        const channelData = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${videoResult.snippet.channelId}&key=${GOOGLE_API_KEY}`
        )
        const channelJson = await channelData.json()
        setChannelInfo(channelJson.items?.[0])
      }
    } catch (error) {
      console.error("Error fetching video details:", error)
    }
  }

  const handleSaveToggle = () => {
    if (!videoInfo) return
    if (isSaved) {
      dispatch(removeSavedVideo(videoId))
    } else {
      dispatch(addSavedVideo(videoInfo))
    }
  }

  if (!videoInfo) {
    return <div className="p-5 font-bold text-lg">Loading video...</div>
  }

  const { snippet, statistics } = videoInfo
  const { title, channelTitle, description } = snippet

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 py-4 px-2 md:px-4">
      {/* ================= LEFT MAIN COLUMN ================= */}
      <div className="flex flex-col w-full lg:w-[70%]">
      
        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <iframe 
            width="100%" 
            height="100%" 
            src={"https://www.youtube.com/embed/" + videoId} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col mt-4 w-full">
          <h1 className="text-lg md:text-xl font-bold text-gray-900 font-lato line-clamp-2">
            {title}
          </h1>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-3 gap-4 w-full">
            
            <div className="flex items-center gap-4">
              <img  
                src={channelInfo ? channelInfo.snippet.thumbnails.default.url : null} 
                alt="Channel-avatar" 
                className="w-10 h-10 rounded-full object-cover bg-gray-200"
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-base text-gray-900 dark:text-white leading-tight">
                  {channelTitle}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {channelInfo ? formatCount(channelInfo.statistics.subscriberCount) : "..."} subscribers
                </p>
              </div>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`flex items-center gap-1.5 font-semibold px-4 py-2 rounded-full ml-2 transition-all duration-200 cursor-pointer ${
                  isSubscribed 
                    ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300" 
                    : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800" 
                }`}
              >
                <AnimatePresence mode="wait">
                  {isSubscribed ? (
                    <motion.div
                      key="subscribed"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-1.5"
                    >
                      <IconCheck className="w-5 h-5" />
                      <span>Subscribed</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="subscribe"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Subscribe
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

           
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar-hide w-full lg:w-auto pb-2 lg:pb-0">
          
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full">
                <button 
                  onClick={() => {
                    if (isLiked) {
                      setIsLiked(false)
                    } else {
                      setIsLiked(true)
                      setIsDisliked(false)
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 border-r border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-l-full transition-colors cursor-pointer"
                >
                  {isLiked ? <IconThumbUpFilled className="w-5 h-5" /> : <IconThumbUp className="w-5 h-5"/>}
                  <span className="text-sm font-semibold">{formatCount(statistics.likeCount)}</span>
                </button>
                <button
                  onClick={() => {
                    if (isDisliked) {
                      setIsDisliked(false)
                    } else {
                      setIsDisliked(true)
                      setIsLiked(false)
                    }
                  }}
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-r-full transition-colors cursor-pointer"
                >
                  {isDisliked ? <IconThumbDownFilled className="w-5 h-5" /> : <IconThumbDown className="w-5 h-5"/>}
                </button>
              </div>

             
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors font-semibold text-sm whitespace-nowrap cursor-pointer">
                <IconShare className="w-5 h-5"/>
                Share
              </button>

             
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSaveToggle}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap cursor-pointer transition-colors ${
                  isSaved
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <motion.div
                  key={isSaved ? "saved-icon" : "save-icon"}
                  initial={{ scale: 0.7, rotate: -15 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isSaved ? (
                    <IconBookmarkFilled className="w-5 h-5" />
                  ) : (
                    <IconBookmark className="w-5 h-5" />
                  )}
                </motion.div>

                <AnimatePresence mode="wait">
                  {isSaved ? (
                    <motion.span
                      key="saved-text"
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Saved
                    </motion.span>
                  ) : (
                    <motion.span
                      key="save-text"
                      initial={{ y: -8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Save
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <div 
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 mt-4 text-sm text-gray-800 dark:text-neutral-200 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <p className="font-semibold text-gray-900 dark:text-white mb-1">
              {formatCount(statistics.viewCount)} views
            </p>
            <p className={`text-sm ${
              showFullDescription 
                ? "whitespace-pre-wrap max-h-96 overflow-y-auto custom-scrollbar-hide"
                : "line-clamp-3"
            }`}>
              {description}
            </p>
            <button className="font-semibold mt-2 text-gray-900 dark:text-white cursor-pointer">
              {showFullDescription ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        {/* 📱 MOBILE & TABLET LIVE CHAT CONTAINER (Visible only on < lg screens) */}
        <div className="block lg:hidden mt-6 w-full border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900">
          <LiveChat/>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <CommentContainer />
        </div>
      </div>

      {/* ================= 💻 DESKTOP LIVE CHAT RIGHT COLUMN (Visible only on lg: and up) ================= */}
      <div className="hidden lg:block lg:w-[30%] shrink-0">
        <div className="sticky top-4 w-full h-[550px] border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 flex flex-col">
          <LiveChat/>
        </div>
      </div>
    </div>    
  )
}

export default WatchPage