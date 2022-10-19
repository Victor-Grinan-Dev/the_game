//import { getCampaign } from "../services/campaignService";
import campaignService from "../services/campaignService"
import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name:"game",
    initialState:{
        campaign:{}
    },
    reducers:{
        setCampaign(state, action){
            state.campaign = action.payload;
        },

        setMapObj(state, action){
            const newMapData = action.payload
            state.campaign = {...state.campaign, "map":newMapData};
        },

        setMap(state, action){
            //the nested array of map
            const newMapArr = action.payload
            state.campaign = {...state.campaign.map, "map":newMapArr};
        }
    }
})

export const initializeGame = () => {
   
   return async (dispatch) => {
     const game = await campaignService.getCampaign(); 

     //console.log(game[0])
     dispatch(setCampaign(game[0]));
   };
 };

export const { setCampaign, setMapObj, setMap } = gameSlice.actions;

export const gameMapSDelector = (state) => state.game.gameMap;


export default gameSlice.reducer;