//import GameTile from "./components/tile/GameTile";
import React, { useEffect, useState } from "react";

import { initializeGame, setCampaign } from "./features/gameSlice";
import { gameMapReader } from "./functions/gameMapReader";
import { theGame } from "./dummyDatabse/gameDatabase";
import { useDispatch, useSelector } from "react-redux";

//console.log(theBattleForTheChorizo)
//todo: set the players randomly in the map, all formatios will be in the starting tile? start moving the tokens.

function App() {

  const campaign = useSelector((state) => state.campaign);

  const dispatch = useDispatch();





  useEffect(() => {
    //read the game from the database
    //dispatch(setCampaign(theGame.campaign))
    //theGame.render()
    dispatch(initializeGame());
    
  }, [dispatch]);

 
  return (
    <div className="App">
      <div className="topPanel">top menu bar</div>
        <div className="gameScreen"> 
            {/* gameMapReader(campaign.map) */}
        </div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
