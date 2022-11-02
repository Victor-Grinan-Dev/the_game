
import React, { useEffect } from "react";

//redux
import { initializeDummyGame, setArmyList, setCampaign, setUser, setUserObj} from "./features/gameSlice";
import { useDispatch, useSelector } from "react-redux";

//components
import DeployPhase from "./components/phaseDeploy/DeployPhase";
import ActionPhase from "./components/phaseAction/ActionPhase";

/******* populate database *********/
//import axios from "axios";
import theCampaign from './dummyDatabse/gameDatabase';
import theBattleForTheChorizo from "./dummyDatabse/gameDatabase";
import Home from "./components/phaseHome/Home";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.game.user)
  const phase = useSelector(state => state.temp.phase)
  const campaign = useSelector(state => state.game.campaign)
  const armyList = useSelector(state => state.game.armyList)
/******* populate database *********/
//axios.post("http://localhost:8010/campaign", theCampaign);// empty database manually, uncomment this and restart app: ctrl+c, npm start. inmediatelly comment this line again.

useEffect(() => {
  console.log("effected")
}, [dispatch]);

const vews = () => {

  /**** initialize data ****/
  /* this should go to the use effect but is not working */

  const currentCampaign = theBattleForTheChorizo; 
  const userObj = currentCampaign.players.filter(p => p.username === user)
  dispatch(setUserObj(userObj[0]));
  dispatch(setCampaign(currentCampaign));
  dispatch(setArmyList(userObj[0].armyList))
  
  switch (phase) {
    case "home":
      return <Home />

    case "deploy":
      return <DeployPhase />

      
    case "action":
      return <ActionPhase />
      
    case "reaction":
      return 
     
    case "fight":
      return 
     
    case "result":
      return 
      
    case "gameover":
      return 
      
    default:
      break;
  } 
}

  return (
    <div className="App">
      {vews()}
    </div>
  );
}

export default App;
