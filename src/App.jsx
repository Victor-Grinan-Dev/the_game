//import GameTile from "./components/tile/GameTile";
import React, { useState } from "react";

import { gameMapReader } from "./functions/gameMapReader";
import { theGame } from "./dummyDatabse/gameDatabase";


//console.log(theBattleForTheChorizo)
//todo: set the players randomly in the map, all formatios will be in the starting tile? start moving the tokens.

function App() {
  const [gameMap, setGameMap] = useState(theGame.campaign.map);
  
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
