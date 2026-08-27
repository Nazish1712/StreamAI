import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
   name: "app",
   initialState : {
    isMenuOpen : false,
    isSidebarOpen : true,
   },
   reducers : {
    toggleMenu : (state) => {
        state.isMenuOpen = !state.isMenuOpen;
    },
    closeSidebar : (state) => {
        state.isSidebarOpen = false;
    },
    openSidebar : (state) => {
        state.isSidebarOpen = true
    }
   }
})

export const {toggleMenu, closeSidebar, openSidebar} = appSlice.actions
export default appSlice.reducer