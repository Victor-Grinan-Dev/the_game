import { createSlice } from "@reduxjs/toolkit";

export const tempSlice = createSlice({
    name:'temp',
    initialState:{
        centerTile:null,
        formation:{},//the current formation on action
        isToken:false,
        isFilterUp:false,
        isOwner:false,
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
        }
    }
});

export const { setCenterTile, setFormation, setIsToken, setIsFilterUp, setIsOwner } = tempSlice.actions;

export default tempSlice.reducer;