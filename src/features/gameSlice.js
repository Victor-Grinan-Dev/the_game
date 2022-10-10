import { createSlice } from "@reduxjs/toolkit";

export const gameState = createSlice({
    name:"game",
    initialState:{
        campaign:[],
        map:[],
    },
    reducers:{

    }
})

export default gameState.reducer;