
import React, { useEffect } from "react";

import DeployPhase from "./components/phaseDeploy/DeployPhase";
import ActionPhase from "./components/phaseAction/ActionPhase";

/******* populate database *********/
//import axios from "axios";
import theCampaign from './dummyDatabse/gameDatabase';

import { setCampaign} from "./features/gameSlice";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const phase = useSelector(state => state.temp.phase)
  const formation = useSelector((state) => {
    return state.temp.formation;
  })

  const gameMap = useSelector(state => {
    return state.game.campaign.map;
  });

  const savedMap = useSelector((state)=>{
    return state.game.campaign.savedMap;
  })
/*
  useEffect(() => {
    dispatch(initializeGame());   
  }, [dispatch]);
  useEffect(() => {
  dispatch(setCampaign(theCampaign));
  console.log("hello");
}, [dispatch]);
*/




const vews = () => {
  dispatch(setCampaign(theCampaign));
  switch (phase) {
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
  


/******* populate database *********/
//axios.post("http://localhost:8010/campaign", theCampaign);// empty database manually, uncomment this and restart app: ctrl+c, npm start. inmediatelly comment this line again.

  return (
    <div className="App">
      {vews()}
    </div>
  );
}

export default App;
