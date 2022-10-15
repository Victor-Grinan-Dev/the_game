import { createSlice } from "@reduxjs/toolkit";
import { theGame } from "../dummyDatabse/gameDatabase";
export const gameState = createSlice({
    name:"game",
    initialState:{
        campaign:{},
        user:{},

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
        }
    }
})

export const initializeGame = () => {
    return async (dispatch) => {
      dispatch(setCampaign(theGame.campaign));
    };
  };

export const { setCampaign } = gameState.actions;
export const { setGameMap } = gameState.actions;

export const campaignSelector = (state) => state.game.campaign;

export default gameState.reducer;