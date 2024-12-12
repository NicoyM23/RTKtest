import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./itemSlice"
import modalReducer from "./modalSlice"

export const store = configureStore({
    reducer: {
        items: itemReducer,
        modal: modalReducer,
    }
})