import { createSlice } from "@reduxjs/toolkit";

export const tempSlice = createSlice({
    name:'temp',
    initialState:{
        centerTile:null,
        formation:{},
        isToken:false,

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
    }
});

export const { setCenterTile, setFormation, setIsToken } = tempSlice.actions;

export default tempSlice.reducer;