import { createSlice } from "@reduxjs/toolkit"

// the userSlice that has the user reducers

export const userSlice = createSlice({
    name: "userState",
    initialState: {value: { users:[],currentUser:{}} },
    reducers: {
        generateUser: (state, action) => {
            state.value.users = [...state.value.users,action.payload]
            state.value.currentUser = action.payload
            // Two users equaling each other perfectly seems basically impossible,
            // since time joined seems to be random, so I didnt want to waste too much time on this
            if(state.value.users.filter((user) => user === state.value.currentUser).length>1 ){
                state.value.currentUser = {...state.value.currentUser, timesPlayed: 2}
            }
        },
        clearUsers: (state, action) => {
            state.value.users = []
            state.value.currentUser = {}
        }
    }
})

export const { generateUser, clearUsers } = userSlice.actions

export default userSlice.reducer