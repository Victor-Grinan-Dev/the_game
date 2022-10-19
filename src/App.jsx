
import React, { useEffect } from "react";

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
