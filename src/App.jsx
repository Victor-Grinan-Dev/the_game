
import React, { useEffect } from "react";

/******* populate database *********/
//import axios from "axios";
//import theCampaign from './dummyDatabse/gameDatabase';

import { initializeGame} from "./features/gameSlice";
import { gameMapReader } from "./functions/gameMapReader";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const gameMap = useSelector(state => {
    return state.game.campaign.map;
  });

  useEffect(() => {
    dispatch(initializeGame());   
  }, [dispatch]);

/******* populate database *********/
//axios.post("http://localhost:8010/campaign", theCampaign);// empty database,uncomment this and restart app: ctrl+c, npm start.

  return (
    <div className="App">
      <div className="topPanel">top menu bar</div>
        <div className="gameScreen"> 
            { gameMap && gameMapReader(gameMap) }
        </div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
