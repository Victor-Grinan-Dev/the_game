import { createSlice } from "@reduxjs/toolkit";

export const gameState = createSlice({
    name:"game",
    initialState:{
        campaign:{},
        gameMap:[],
        user:{}
    },
    reducers:{
        setCampaign:(state, action)=>{
            state.campaign = action.payload
        },
        setGameMap:(state, action)=>{
            state.gameMap = action.payload
        }
    }
})

export const { setCampaign } = gameState.actions;
export const { setGameMap } = gameState.actions;

export const campaignSelector = (state) => state.game.campaign;

export default gameState.reducer;