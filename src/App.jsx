//import GameTile from "./components/tile/GameTile";
import React, { useEffect, useState } from "react";

import { initializeGame, setCampaign, setMap } from "./features/gameSlice";
import { gameMapReader } from "./functions/gameMapReader";
import { useDispatch, useSelector } from "react-redux";

//console.log(theBattleForTheChorizo)
//todo: set the players randomly in the map, all formatios will be in the starting tile? start moving the tokens.

function App() {
  const dispatch = useDispatch();

  const gameMap = useSelector(state => {
    //console.log('state:', state.game.campaign.map);
    return state.game.campaign.map;
  });

  const campaign = useSelector(state => {
    //console.log('state:', state.game.campaign.map);
    return state.game.campaign;
  });
  
  
  
  useEffect(() => {
    dispatch(initializeGame());   
  }, [dispatch]);



/*
  import { shitty } from "./dummyDatabse/map";
  import { lionPlayer } from "./dummyDatabse/playersData";
  import { theGame } from "./dummyDatabse/gameDatabase";

  shitty.forEach(row => {
    row.forEach(tile => {
      if(tile.id === "a00"){
        tile.formation = lionPlayer.army_lists.composition[0]
      }
    })
  })
  gameMap = {...gameMap, "map":shitty};
*/

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
