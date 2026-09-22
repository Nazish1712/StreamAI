
export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=GB&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "/api/suggest?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENTS_API = "https://raw.githubusercontent.com/Nazish1712/StreamAI-Comments-API/refs/heads/main/comments-api.json"

export const YOUTUBE_LIVECHAT_API = "https://raw.githubusercontent.com/Nazish1712/StreamAI-LiveChatMessage-API/refs/heads/main/LiveChatMessages-API.json"

export const LIVE_CHAT_COUNT = 25;
//NOW I CAN HAVE DIFFERENT OFFSET FOR MOBILE AND TABLET