import React, { useState } from 'react';

import DoneBtn from './panelComponents/DoneBtn';
import css from './actionPanel.module.css';

import { useDispatch, useSelector } from 'react-redux';
import Token from '../token/Token';
import ActionButons from './panelComponents/ActionButons';
import { deployHighlights } from '../../functions/adjacents';
import { setCampaign } from '../../features/gameSlice';

const ActionPanel = ({formation, fn}) => {
    const dispatch = useDispatch();
    const currentFormation = useSelector(state => state.temp.formation);
    const phase = useSelector(state => state.temp.phase);
    //const campaign = useSelector(state => state.game.campaign);
    //const gameMap = useSelector(state => state.game.campaign.map.map);
    //const player = useSelector(state => state.game.armyName);
    const formations = useSelector(state => state.game.armyList.composition);

    const [leftForDeploy, setLeftfordeploy] = useState(formations);

    /* 
    
    const updateMap = (newMapArray) => {
        const newCampaign = {...campaign.map, "map": newMapArray}
        dispatch(setCampaign(newCampaign)); 
    };


    const selectToDeploy = (e) => {
        
        const clicked = e.target.classList[0].split("_")[0];
        const newMap = deployHighlights(gameMap, player);
        updateMap(newMap);
        console.log(clicked)
    }
    */

  return (
    <div className={css.actionPanel}>

         <div className={css.groupPhaseButtons}>
            <DoneBtn />
         </div>

        {phase === "action" && formation && !formation.isBeen && currentFormation ? <ActionButons formation={formation} />:null}
        
        {phase === "deploy" ? <div className={css.groupActionButtons}>
            {
                //
                leftForDeploy.map(form => (
                    <Token formation={form} key={form.name} fn={fn}/>
                ))
            }
                        
        </div> : null
        }
    </div>
  )
}

export default ActionPanel;