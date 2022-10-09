import GameTile from "./components/tile/GameTile";
import { wolfPlayer } from "./dummyDatabse/playersData";

const currentForm = wolfPlayer.formations[0];
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
            formation={currentForm} 
          />
        </div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
