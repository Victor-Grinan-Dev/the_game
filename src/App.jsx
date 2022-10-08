import GameTile from "./components/tile/GameTile";


function App() {
  return (
    <div className="App">
      <div className="topPanel">top menu bar</div>
        <div className="gameScreen"><GameTile/></div>
      <div className="bottomPanel">bottom menu bar</div>
    </div>
  );
}

export default App;
