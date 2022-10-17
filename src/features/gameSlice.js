import { getCampaign } from "../services/campaignService";

import { createSlice } from "@reduxjs/toolkit";
import { theGame } from "../dummyDatabse/gameDatabase";
export const gameState = createSlice({
    name:"game",
    initialState:{
        campaign:{},
        user:{},

        gameMap:{},
        isSelectedTiles: false,
        unitToMove:{}
    },
    reducers:{
        setCampaign:(state, action)=>{
            state.campaign = action.payload
        },
        setGameMap:(state, action)=>{
            state.gameMap = action.payload
        },
        setUnitToMove:(state, action)=>{
            state.unitToMove = action.payload;
        },
        unSetUnitToMove:(state)=>{
            state.unitToMove = {};
        },
        setIsSelectedTiles:(state, action)=>{
            state.unitToMove = action.payload;
        }
    }
})

export const initializeGame = () => {
   return async (dispatch) => {
     const game = await getCampaign();
     dispatch(setCampaign(theGame.campaign));
   };
 };

export const { setCampaign, setGameMap, setIsSelectedTiles } = gameState.actions;

export const campaignSelector = (state) => state.game.campaign;
export const isSelectedTilesSelector = (state) => state.game.isSelectedTiles;
export const gameMapSDelector = (state) => state.game.gameMap;
export default gameState.reducer;