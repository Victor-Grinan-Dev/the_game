import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameMapReader } from '../../functions/gameMapReader';
import ActionPanel from '../actionPanel/ActionPanel';
import InfoPanel from '../infoPanel/InfoPanel';
import { deployHighlights } from '../../functions/adjacents';
//import { hexTestMap } from '../../dummyDatabse/map';
import { setArmyList, setCampaign, setUserObj } from '../../features/gameSlice';
import { theBattleForTheChorizo } from '../../dummyDatabse/campaignData';

const DeployPhase = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.game.armyName);
    useEffect(() => {
        const currentCampaign = theBattleForTheChorizo; 
        const userObj = currentCampaign.players.filter(p => p.username === user)

        dispatch(setCampaign(currentCampaign));
        dispatch(setUserObj(userObj[0]));
        dispatch(setArmyList(userObj[0].armyList));
        
      }, []);

    const user = useSelector(state => {
        return state.game.user;
    })
    const campaign = useSelector(state => {
        return state.game.campaign;
    })

    const gameMap = useSelector(state => {
      return state.game.campaign.map.map;
    })

    const updateMap = (newMapArray) => {
      const newCampaign = {...campaign.map, "map": newMapArray}
      dispatch(setCampaign(newCampaign)); 
  };
    const selectToDeploy = (e) => {
        
      const clicked = e.target.classList[0].split("_")[0];
      const newMap = deployHighlights(gameMap, player);
      updateMap(newMap);
      console.log(clicked, newMap)
  }
  
  return (
    <div className="App">

     <InfoPanel />
        <div className="gameScreen"> 
            { gameMapReader(gameMap) }
        </div>
     <ActionPanel fn={selectToDeploy}/>
      
    </div>
  )
}

export default DeployPhase;