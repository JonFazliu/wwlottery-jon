import { createSlice } from "@reduxjs/toolkit"

// the sort reducer that governs the order of sorting

export const sortSlice = createSlice({
    name: "sortState",
    initialState: {value: { sort:false}} ,
    reducers: {
        sort: (state, action) => {
            state.value.sort = !state.value.sort
        }
        
    }
})

export const { sort } = sortSlice.actions

export default sortSlice.reducer