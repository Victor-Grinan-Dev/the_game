import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({

    name: 'player',
    initialState:{
        user:'Qwerty123',
        armyName:'Wolf Raiders',
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

        addAFormationObj(state, action){
            state.formations = [ ...state.formations, action.payload];
        }, 

        updateAFormation( _, action){
            const updatedFormation = action.payload;
            this.deleteAFormationByName(updatedFormation.name);
            this.addAFormationObj(updatedFormation);
        },
    }
});

export const { setFormations, deleteAFormationByName } = playerSlice.actions;

export default playerSlice.reducer;