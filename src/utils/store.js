import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import savedSlice from "./saveVideoSlice"
import chatSlice from "./chatSlice"

const store = configureStore({
    reducer : {
        app : appSlice,
        saved : savedSlice,
        chat : chatSlice,
    }
})

export default store;