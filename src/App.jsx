//import GameTile from "./components/tile/GameTile";
import React, { useEffect, useState } from "react";
import { campaignSelector, setCampaign } from "./features/gameSlice";
import { gameMapReader } from "./functions/gameMapReader";
import { theGame } from "./dummyDatabse/gameDatabase";
import { useDispatch, useSelector } from "react-redux";

//console.log(theBattleForTheChorizo)
//todo: set the players randomly in the map, all formatios will be in the starting tile? start moving the tokens.

function App() {
  const dispatch = useDispatch();

  const campaign = useSelector(campaignSelector);
  const [gameMap, setGameMap] = useState(theGame.campaign.map);

  useEffect(() => {
    //read the game from the database
    dispatch(setCampaign(theGame.campaign))
    //theGame.render()
  }, []);

  return (
    <div className="App">
      <div className="topPanel">top menu bar</div>
        <div className="gameScreen"> 
            {gameMapReader(gameMap)}
        </div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
