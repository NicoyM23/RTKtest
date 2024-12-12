import {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
    },
    reducers: {
        addItem (state, action) {
            console.log(state)
            console.log(action)

            state.items.push({
                id: Date.now() * Math.random(),
                text: action.payload,
            })
        },
        removeItem (state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})
export const { addItem, removeItem } = itemSlice.actions
export default itemSlice.reducer