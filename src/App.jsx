//import GameTile from "./components/tile/GameTile";
import React, { useEffect, useState } from "react";

import { wolfPlayer } from "./dummyDatabse/playersData";
import { lionPlayer } from "./dummyDatabse/playersData";
import { hexTestMap } from "./dummyDatabse/map";
import { gameMapReader } from "./functions/gameMapReader";
import GameTile from "./components/tile/GameTile";

const wolfFormation1 = wolfPlayer.formations[0];
const lionFormation1 = lionPlayer.formations[0];

function App() {
  const [objecMap, setObjectMap] = useState({})
  const [gameMap, setGameMap] = useState([])

  //hard coded variables (configuration):
  const side = 75
  const topStart = 0;
  const leftStart = 0;

  //logic variables:
  const evenLeftStart = leftStart + side * 0.5;
  const left = side; //incrementor 
  const top = side * 0.75; //incrementor 

const handleLeft = (y, x) => {
if(y % 2 === 0) {
      return leftStart + left * x
  } else {
      return evenLeftStart + left * x
  }
}

useEffect(()=>{
  setObjectMap(hexTestMap);
  setGameMap(hexTestMap.map)
}, [])

  let y = 0;
  let x = 0;

  return (
    <div className="App">
      <div className="topPanel">top menu bar</div>
        <div className="gameScreen">

        {/*TODO: make thia a map()*/}

        <GameTile id={0}posLeft={handleLeft(y, x)}posTop={topStart}image={'hills'}func={null} showId={false} formation={wolfFormation1}/>
        <GameTile id={1}posLeft={75}posTop={topStart}image={'plains'}func={null} showId={false} formation={null}/>
        <GameTile id={2}posLeft={150}posTop={topStart}image={'forest'}func={null} showId={false} formation={null}/>
        <GameTile id={3}posLeft={38}posTop={56}image={'plains'}func={null} showId={false} formation={null}/>
        <GameTile id={4}posLeft={113}posTop={56}image={'plains'}func={null} showId={false} formation={null}/>
        <GameTile id={5}posLeft={0}posTop={112}image={'plains'} func={null} showId={false} formation={null}/>
        <GameTile id={6}posLeft={75} posTop={112}image={'forest'}func={null}showId={false} formation={null}/>
        <GameTile id={7}posLeft={150}posTop={112}image={'hills'}func={null} showId={false} formation={lionFormation1}/>
        
           
        </div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
