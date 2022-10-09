import GameTile from "./components/tile/GameTile";
import { wolfPlayer } from "./dummyDatabse/playersData";

function App() {
  return (
    <div className="App">
      <div className="topPanel">top menu bar</div>
        <div className="gameScreen">
          <GameTile 
            id={0}
            posLeft={0}
            posTop={0}
            image={'plains'}
            func={null} 
            showId={false} 
            formation={null} 
          />
        </div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
