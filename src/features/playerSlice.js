import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({

    name: 'player',
    initialState:{
        user:'Qwerty123',
        formations:[],
    },
    reducers:{
        setFormations(state, action){
            state.formations = action.payload;
        },

        deleteAFormationByName(state, action){
            const newFormationArray = state.formations.filter(formation => {
                return formation.name !== action.payload
            })
            state.formations = newFormationArray;
        },
    }
});

