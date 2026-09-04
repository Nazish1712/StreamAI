import React from 'react'
import Comment from './Comment'
import { commentsData } from '../utils/commentsData'

const CommentContainer = () => {
  return (
    <div className="mt-6 w-full p-3">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-900 font-bold tracking-normal font-lato text-lg md:text-xl text-left">Comments</h2>
          <div>
            <Comment data={commentsData[0]}></Comment>
          </div>
        </div>
    </div>
  )
}

export default CommentContainer