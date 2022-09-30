import darkModeReducer from "./darkModeSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        darkMode : darkModeReducer
    }
})