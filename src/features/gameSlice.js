//import { getCampaign } from "../services/campaignService";
import campaignService from "../services/campaignService"
import { createSlice } from "@reduxjs/toolkit";
import { theGame } from "../dummyDatabse/gameDatabase";
export const gameSlice = createSlice({
    name:"game",
    initialState:{
        campaign:{}
    },
    reducers:{
        setCampaign(state, action){
            state.campaign = action.payload;
        }
    }
})

export const initializeGame = () => {
   
   return async (dispatch) => {
     const game = await campaignService.getCampaign(); 

     console.log()
     dispatch(setCampaign(game[0]));
   };
 };

export const { setCampaign } = gameSlice.actions;

export const gameMapSDelector = (state) => state.game.gameMap;


export default gameSlice.reducer;