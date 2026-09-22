import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { IconSend } from '@tabler/icons-react'

const LiveChat = () => {

const [liveMessage, setLiveMessage] = useState("")

  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-neutral-900">
     
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 dark:border-neutral-800 shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <h2 className="font-semibold text-sm text-gray-900 dark:text-neutral-100">
            Live Chat
          </h2>
        </div>
        <span className="text-[11px] text-gray-500 dark:text-neutral-400">
          Top chat
        </span>
      </div>

     
      <div className="flex-1 min-h-0 overflow-hidden">
        <ChatMessage />
      </div>

     
      <form className="flex items-center gap-2 p-2.5 border-t border-gray-200 dark:border-neutral-800 shrink-0"
      onSubmit={((e)=>{
          e.preventDefault()
      })}>
        <input
          type="text"
          placeholder="Chat..."
          value = {liveMessage}
          onChange={((e)=>{setLiveMessage(e.target.value)})}
          className="flex-1 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 placeholder-gray-500 text-xs md:text-sm px-3.5 py-2 rounded-full outline-none focus:ring-1 focus:ring-blue-500 font-lato"
        />
        <button 
          type="button"
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shrink-0 cursor-pointer"
        >
          <IconSend className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}

export default LiveChat