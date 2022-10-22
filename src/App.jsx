
import React, { useEffect } from "react";
import InfoPanel from "./components/infoPanel/InfoPanel";
import ActionPanel from "./components/actionPanel/ActionPanel";

/******* populate database *********/
//import axios from "axios";
//import theCampaign from './dummyDatabse/gameDatabase';

import { initializeGame} from "./features/gameSlice";
import { gameMapReader } from "./functions/gameMapReader";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const formation = useSelector((state) => {
    return state.temp.formation;
  })

  const gameMap = useSelector(state => {
    return state.game.campaign.map;
  });

  useEffect(() => {
    dispatch(initializeGame());   
  }, [dispatch]);



/******* populate database *********/
//axios.post("http://localhost:8010/campaign", theCampaign);// empty database manually, uncomment this and restart app: ctrl+c, npm start. inmediatelly comment this line again.

  return (
    <div className="App">
      <InfoPanel  />
      {/* <div className="topPanel">Info bar</div> */}
        <div className="gameScreen"> 
            { gameMap && gameMapReader(gameMap) }
        </div>
      <ActionPanel formation={formation} />
      {/* <div className="bottomPanel">Action menu bar</div> */}
    </div>
  );
}

export default App;
