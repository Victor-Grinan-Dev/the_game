import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCampaign } from '../../../features/gameSlice';
import css from '../actionPanel.module.css';
import { reActivateTokens } from '../../../functions/moveToken';

const DoneBtn = () => {

    const dispatch = useDispatch();

    const campaign = useSelector((state)=> {
        return state.game.campaign;
    })

    const objectMap = useSelector((state)=> {
        return state.game.campaign.map;
    })

    const gameMap = useSelector((state) => {
        //console.log(state.game.campaign.map?.map);
        return state.game.campaign.map?.map;
    })

    const updateMap = (newMapArray) => {
        const tempMap = { ...objectMap, "map": newMapArray};
        dispatch(setCampaign({ ...campaign, "map":tempMap}));
    }

    const saveOrders = () => {
        //dispatch(setCampaign({...campaign, "savedMap":gameMapObj.map}))
        console.log("map to save")
    }

    const doneHandler = () => {
        console.log("done");
        const reactivatedTokensMap = reActivateTokens(gameMap);

        saveOrders();//gather all players orders in an array and solve them one at the time.
        updateMap(reactivatedTokensMap);
        
    } 


  return (
    <button className={css.nextButton} onClick={doneHandler} >Done</button>
  )
}

export default DoneBtn;