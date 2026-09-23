import React, { useEffect, useState } from 'react'
import { YOUTUBE_LIVECHAT_API } from '../utils/constants'
import { useDispatch , useSelector} from 'react-redux'
import { addMessage } from '../utils/chatSlice'

const ChatMessage = () => {
  const [liveChatData, setLiveChatData] = useState([])

  const dispatch = useDispatch()

  const chatMessages = useSelector((store) => store.chat.messages)

 useEffect(()=> {
  loadingLiveChat()
 },[])

 const loadingLiveChat = async () => {
  try {
    const data = await fetch(YOUTUBE_LIVECHAT_API)
    const json = await data.json()
    setLiveChatData(json.data || [])
  } catch (error) {
    console.error("Error fetching live chat :", error)
  }
}

 useEffect(()=>{
if(!liveChatData || liveChatData.length === 0) return

let index = 0
const i = setInterval(()=>{
   //API Polling
  
   dispatch(addMessage(liveChatData[index]))
   index = (index + 1) % liveChatData.length
  },1500)
  return () => clearInterval(i)
 },[liveChatData])

  

  return (
    <div className="flex flex-col-reverse w-full h-full overflow-y-auto px-2 py-1 gap-1 custom-scrollbar-hide font-lato">
      {chatMessages.map((chat, index) => (
        <div
          key={index}
          className="flex items-start gap-3 px-3 py-1.5 rounded-lg hover:bg-gray-100/70 dark:hover:bg-neutral-800/60 transition-colors text-xs md:text-sm"
        >
         
          <div className="shrink-0 mt-0.5">
            <img
              src={chat.avatar}
              alt={`${chat.name}'s avatar`}
              className="w-6 h-6 rounded-full object-cover bg-gray-200 dark:bg-neutral-700 border border-gray-200 dark:border-neutral-700"
            />
          </div>

       
          <div className="flex-1 leading-snug break-words">
            <span className="font-semibold text-gray-600 dark:text-neutral-400 mr-2">
              {chat.name}
            </span>
            <span className="text-gray-900 dark:text-neutral-200 font-normal">
              {chat.message}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatMessage