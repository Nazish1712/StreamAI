import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import savedSlice from "./saveVideoSlice"

const store = configureStore({
    reducer : {
        app : appSlice,
        saved : savedSlice,
    }
})

export default store;