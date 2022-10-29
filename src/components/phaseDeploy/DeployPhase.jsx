import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameMapReader } from '../../functions/gameMapReader';
import ActionPanel from '../actionPanel/ActionPanel';
import InfoPanel from '../infoPanel/InfoPanel';
import { higlightedMap } from '../../functions/adjacents';
import { hexTestMap } from '../../dummyDatabse/map';
import { setArmyList, setCampaign, setUserObj } from '../../features/gameSlice';
import { theBattleForTheChorizo } from '../../dummyDatabse/campaignData';

const DeployPhase = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const currentCampaign = theBattleForTheChorizo; 
        const userObj = currentCampaign.players.filter(p => p.username === user)
        dispatch(setCampaign(currentCampaign));
        dispatch(setUserObj(userObj[0]));
        dispatch(setArmyList(userObj[0].armyList))
      }, []);

    const user = useSelector(state => {
        return state.game.user;
    })
    const campaign = useSelector(state => {
        return state.game.campaign;
    })

    const gameMap = useSelector(state => {
      console.log(state.game.campaign.map.map)
      return state.game.campaign.map.map;
    })


    
  return (
    <div className="App">

     <InfoPanel />
        <div className="gameScreen"> 
            { gameMapReader(gameMap) }
        </div>
     <ActionPanel />
      
    </div>
  )
}

export default DeployPhase;