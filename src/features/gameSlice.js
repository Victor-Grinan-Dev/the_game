//import { getCampaign } from "../services/campaignService";
import campaignService from "../services/campaignService"
import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name:"game",
    initialState:{
        campaign:{},
        user:"Qwerty123",
        armyName:'Wolf Raiders',
        formations:[],
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
        },

        setUser(state, action){
            state.user = action.payload;
        },

        setArmyName(state, action){
            state.armyName = action.payload;
        },

        setFormations(state, action){
            state.formations = action.payload;
        },

        deleteAFormationByName(state, action){
            const newFormationArray = state.formations.filter(formation => {
                return formation.name !== action.payload
            })
            state.formations = newFormationArray;
        },

        addAFormationObj(state, action){
            state.formations = [ ...state.formations, action.payload];
        }, 

        updateAFormation( _, action){
            //delete the one by name and add the object modified
            const updatedFormation = action.payload;
            this.deleteAFormationByName(updatedFormation.name);
            this.addAFormationObj(updatedFormation);
        },
        
    }
})

export const initializeGame = () => {
   
   return async (dispatch) => {
     const game = await campaignService.getCampaign(); 
     dispatch(setCampaign(game[0]));

   };
 };

export const { setCampaign, setMapObj, setMap, setUser, setArmyName, setFormations, deleteAFormationByName, addAFormationObj, updateAFormation } = gameSlice.actions;

export const gameMapSDelector = (state) => state.game.gameMap;


export default gameSlice.reducer;