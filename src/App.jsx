
import React, { useEffect } from "react";
import InfoPanel from "./components/infoPanel/InfoPanel";
import ActionPanel from "./components/actionPanel/ActionPanel";

/******* populate database *********/
//import axios from "axios";
import theCampaign from './dummyDatabse/gameDatabase';

import { initializeGame, saveMap, setCampaign} from "./features/gameSlice";
import { gameMapReader } from "./functions/gameMapReader";
import { useDispatch, useSelector } from "react-redux";
import { setVision } from "./functions/adjacents";

function App() {
  const dispatch = useDispatch();

  const formation = useSelector((state) => {
    return state.temp.formation;
  })

  const gameMap = useSelector(state => {
    return state.game.campaign.map;
  });

  const savedMap = useSelector((state)=>{
    return state.game.campaign.savedMap;
  })
/*
  useEffect(() => {
    dispatch(initializeGame());   
  }, [dispatch]);
*/

useEffect(() => {
  dispatch(setCampaign(theCampaign));
}, [dispatch]);

/******* populate database *********/
//axios.post("http://localhost:8010/campaign", theCampaign);// empty database manually, uncomment this and restart app: ctrl+c, npm start. inmediatelly comment this line again.

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

export default App;
