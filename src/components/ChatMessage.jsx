import React, { useEffect } from 'react'
import { YOUTUBE_LIVECHAT_API } from '../utils/constants'

const ChatMessage = () => {

const [liveChatData , setLiveChatData] = useState()

useEffect(()=>{
 loadingLiveChat()
},[])

const loadingLiveChat = async () => {
    try{
     const data = await fetch(YOUTUBE_LIVECHAT_API)
     const json = await data.json()
     setLiveChatData(json.data)
    } catch(error){
      
    }
}

  return (
    <div className="flex">
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default ChatMessage