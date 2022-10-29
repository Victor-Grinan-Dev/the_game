//import { getCampaign } from "../services/campaignService";
import campaignService from "../services/campaignService"
import { createSlice, current } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name:"game",
    initialState:{
        campaign:null,
        user:"Victor", //Qwerty123, lion kings //Victor, Wolf Raiders
        userObj:null,
        armyName:'Wolf Raiders',
        armyList:null,
    },
    reducers:{
        setCampaign(state, action){
            state.campaign = action.payload;
        },

        setUser(state, action){
            //from localstorage/cookies
            state.campaign = action.payload;
        },

        setUserObj(state, action){
            state.userObj = action.payload;
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

        setArmyName(state, action){
            state.armyName = action.payload;
        },

        setArmyList(state, action){
            state.armyList = action.payload;
        },

        saveMap(state, action){
           state.campaign = {...state.campaign, "saveMap":action.payload};
        },


        deleteAFormationByName(state, action){
            const newFormationArray = state.armyList.filter(formation => {
                return formation.name !== action.payload
            })
            state.armyList = newFormationArray;
        },

        addAFormationObj(state, action){
            state.armyList = [ ...state.armyList, action.payload];
        }, 

        updateAFormation( _, action){
            //delete the one by name and add the object modified
            const updatedFormation = action.payload;
            deleteAFormationByName(updatedFormation.name);
            addAFormationObj(updatedFormation);
             

            //setCampaign
            //setmap
            
            
        },
    }
})

export const initializeGame = () => {
   
   return async (dispatch, getData) => {

    //from localstorage authenticate username and game/campaign:

    const games = await campaignService.getCampaign(); 
    const campaign = games.filter(camp => {
        return camp.campaignId === "test_campaign";
    })
    
    dispatch(setCampaign(campaign[0]));
     const playerObject = campaign[0].players.filter(player => {
        return player.username === 'Victor123';
    });
    dispatch(setUserObj(playerObject[0]))
    dispatch(setArmyList(playerObject[0].army_list.composition))
    //dispatch(saveMap())
    //console.log(playerObject);
    //console.log(playerObject[0].army_list.composition)
   };
 };



export const { 
    setCampaign, 
    setUser, 
    setUserObj,
    setMapObj, 
    setMap,  
    setArmyName, 
    setArmyList, 
    deleteAFormationByName, 
    addAFormationObj, 
    updateAFormation,
    saveMap,
    } = gameSlice.actions;

export const gameMapSDelector = (state) => state.game.gameMap;

export default gameSlice.reducer;