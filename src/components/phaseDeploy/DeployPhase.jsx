import React from 'react';
import { useSelector } from 'react-redux';
import { gameMapReader } from '../../functions/gameMapReader';
import ActionPanel from '../actionPanel/ActionPanel';
import InfoPanel from '../infoPanel/InfoPanel';

import { hexTestMap } from '../../dummyDatabse/map';

const DeployPhase = () => {

    const campaign = useSelector(state => state.game.campaign)
    const gameMap = hexTestMap.map

    console.log(gameMap)
  return (
    <div className="App">

     <InfoPanel />
        <div className="gameScreen"> 
            { campaign && gameMapReader(gameMap) }
        </div>
     <ActionPanel />
      
    </div>
  )
}

export default DeployPhase;