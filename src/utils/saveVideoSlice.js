import { createSlice } from "@reduxjs/toolkit";

const loadSavedVideosFromStorage = () => {
    try {
    const storedVideos = localStorage.getItem("saved_videos")
    return storedVideos ? JSON.parse(storedVideos) : []
    } catch (error){
      return[]
    }
}

const savedSlice = createSlice({
    name: "saved" ,
    initialState : {
        items : loadSavedVideosFromStorage(),
    },
reducers : {
    addSavedVideo : (state, action) => {
        state.items.push(action.payload)
        localStorage.setItem("saved_videos", JSON.stringify(state.items))
    },
    removeSavedVideo : (state, action) => {
        state.items = state.items.filter((item)=> item.id !== action.payload)
        localStorage.setItem("saved_videos", JSON.stringify(state.items))
    }
}
})

export const {addSavedVideo, removeSavedVideo} = savedSlice.actions

export default savedSlice.reducer