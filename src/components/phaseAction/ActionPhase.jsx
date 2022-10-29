import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import InfoPanel from '../infoPanel/InfoPanel'; 
import ActionPanel from '../actionPanel/ActionPanel';
import { gameMapReader } from '../../functions/gameMapReader';
import { setCampaign } from '../../features/gameSlice';

import { theBattleForTheChorizo } from '../../dummyDatabse/campaignData';

const ActionPhase = () => {

  const dispatch = useDispatch();
  const phase = useSelector(state => state.temp.phase)
  const formation = useSelector(state => state.temp.formation)
  const gameMap = useSelector(state => state.game.campaign.map);
  const savedMap = useSelector(state => state.game.campaign.savedMap)
console.log(theBattleForTheChorizo)
  useEffect(() => {
    dispatch(setCampaign(theBattleForTheChorizo));
  }, [dispatch]);

  return (
    <div className="App">
      <InfoPanel  />
      {/* <div className="topPanel">Info bar</div> */}
        <div className="gameScreen"> 
            { gameMap && gameMapReader(gameMap.map) }
        </div>
      <ActionPanel formation={formation} />
      {/* <div className="bottomPanel">Action menu bar</div> */}
    </div>
  );
}

export default ActionPhase;





