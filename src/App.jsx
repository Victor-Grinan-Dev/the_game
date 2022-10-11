//import GameTile from "./components/tile/GameTile";
import React, { useState } from "react";

import { wolfPlayer } from "./dummyDatabse/playersData";
import { lionPlayer } from "./dummyDatabse/playersData";

import { gameMapReader } from "./functions/gameMapReader";
import { theBattleForTheChorizo } from "./dummyDatabse/campaignData";

theBattleForTheChorizo.players.push(wolfPlayer);
theBattleForTheChorizo.players.push(lionPlayer);

//console.log(theBattleForTheChorizo)

//todo: set the players randomly in the map, all formatios will be in the starting tile? start moving the tokens.

theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[0], 'a04')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[1], 'b04')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[2], 'a03')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[3], 'b05')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[4], 'b03')

theBattleForTheChorizo.map.placeFormation(lionPlayer.army_lists.composition[0], 'g04')
theBattleForTheChorizo.map.placeFormation(lionPlayer.army_lists.composition[1], 'f04')
console.log(lionPlayer.army_lists.composition[1]);
theBattleForTheChorizo.map.placeFormation(lionPlayer.army_lists.composition[2], 'f03')


function App() {
  const [gameMap, setGameMap] = useState(theBattleForTheChorizo.map);
  
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
