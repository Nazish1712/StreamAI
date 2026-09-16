import React, { useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'

const Comment = ({ data }) => {
  if (!data) return null

  const { name, text, avatar, replies, timestamp } = data
  const [showReplies, setShowReplies] = useState(false)
  const hasReplies = replies && replies.length > 0

  return (
    <div className="flex flex-col">
      <div className="flex gap-3 items-start py-2">
        <img
          src={avatar}
          alt={name}
          className="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5"
        />
        <div className="flex flex-col text-sm w-full">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 dark:text-gray-100 text-left">
              @{name}
            </span>
            {timestamp && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {timestamp}
              </span>
            )}
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-left mt-0.5">
            {text}
          </p>

          
          {hasReplies && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-xs mt-2 py-1 px-2.5 rounded-full hover:bg-blue-50 dark:hover:bg-blue-950/40 w-fit cursor-pointer transition-colors"
            >
              <motion.span
                animate={{ rotate: showReplies ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="inline-flex"
              >
                <IconChevronDown className="w-3.5 h-3.5" />
              </motion.span>
              <span>
                {replies.length} {replies.length === 1 ? 'reply' : 'replies'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Dropdown for Replies */}
      <AnimatePresence initial={false}>
        {hasReplies && showReplies && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-6 ml-4 border-l-2 border-gray-200 dark:border-gray-700 flex flex-col pt-1">
              {replies.map((reply) => (
                <Comment key={reply.id} data={reply} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Comment