import React from 'react'
import Comment from './Comment'
import { YOUTUBE_COMMENTS_API } from '../utils/constants'
import { useState , useEffect} from 'react'


const CommentContainer = () => {

const [comments, setComments] = useState([])

const getCommentsData = async () => {
  try
  {const data = await fetch(YOUTUBE_COMMENTS_API)
 const json = await data.json()
 setComments(json)}
 catch(error){
  console.error("Failed to fetch comments:", error);
 }
 
}

useEffect(()=>{
  getCommentsData()}
,[])

  return (
    <div className="mt-6 w-full p-3">
        <div className="flex flex-col gap-4">
          <h2 className="text-gray-900 font-bold tracking-normal font-lato text-lg md:text-xl text-left">Comments</h2>
          <div className="flex flex-col">
            {comments.map((comment)=>{
              <Comment key={comment.id} data={comment}></Comment>
            })}
          </div>
        </div>
    </div>
  )
}

export default CommentContainer