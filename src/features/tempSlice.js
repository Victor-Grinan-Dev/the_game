import { createSlice } from "@reduxjs/toolkit";

export const tempSlice = createSlice({
    name:'temp',
    initialState:{
        centerTile:null,
        formation:null,//the current formation on action
        isToken:false,
        isFilterUp:false,
        isOwner:false,
        phase:"deploy", //deploy, action, reaction, fight, result, gameover
        info:undefined,
        turn:0,
    },

    reducers:{
        setCenterTile(state, action){
            state.centerTile=action.payload;
        },
        setFormation(state, action){
            state.formation=action.payload;
        },
        setIsToken(state, action){
            state.isToken=action.payload;
        },
        setIsFilterUp(state, action){
            state.isFilterUp=action.payload;
        },
        setIsOwner(state, action){
            state.isOwner = action.payload;
        },
        setPhase(state, action){
            state.phase = action.payload;
        },
        setInfo(state, action){
            state.info = action.payload;
        },
        setTurn(state){
            state.turn = state.turn + 1;
        },
    }
});

export const { setCenterTile, setFormation, setIsToken, setIsFilterUp, setIsOwner, setPhase, setInfo } = tempSlice.actions;

export default tempSlice.reducer;