import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-neutral-900">
      {/* Top Header */}
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

      {/* Chat Messages Container */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ChatMessage />
      </div>
    </div>
  )
}

export default LiveChat