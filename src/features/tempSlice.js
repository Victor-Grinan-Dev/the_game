import { createSlice } from "@reduxjs/toolkit";

export const tempSlice = createSlice({
    name:'temp',
    initialState:{
        centerTile:null,
        formation:{},//the current formation on action
        isToken:false,
        isFilterUp:false,
        formations:[], //all formations that belong to this user army
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
        setFormations(state, action){
            state.formations = action.payload;
        }
    }
});

export const { setCenterTile, setFormation, setIsToken, setIsFilterUp } = tempSlice.actions;

export default tempSlice.reducer;