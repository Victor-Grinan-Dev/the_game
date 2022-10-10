//import GameTile from "./components/tile/GameTile";
import React, { useState } from "react";

//import { wolfPlayer } from "./dummyDatabse/playersData";
//import { lionPlayer } from "./dummyDatabse/playersData";
import { hexTestMap } from "./dummyDatabse/map";
import { gameMapReader } from "./functions/gameMapReader";


//const wolfFormation1 = wolfPlayer.formations[0];
//const lionFormation1 = lionPlayer.formations[0];
const wolfFormation1 = null;
const lionFormation1 = null;

function App() {
  const [gameMap, setGameMap] = useState(hexTestMap);

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
