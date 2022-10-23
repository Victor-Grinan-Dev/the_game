import React from 'react';

import DoneBtn from './panelComponents/DoneBtn';
import css from './actionPanel.module.css';
import { generalActions } from '../../dummyDatabse/generalActions';

const ActionPanel = ({formation}) => {

    const showSkills = () =>{
        //console.log(formation.actions)
        if(formation && formation.actions){
            return (
                formation.actions.map((action, i )=>(
                    <button key={i} className={css.actionButton}>{action}</button>)
                )
            )
        }

        return null;
    }

  return (
    <div className={css.actionPanel}>

         <div className={css.groupPhaseButtons}>
            <DoneBtn />
         </div>

        <div className={css.groupActionButtons}>
            {
                generalActions.map((action,i) => (
                    <button className={css.actionButton} key={i}>{action}</button>
                ))
            }
            {showSkills()}
            
        </div>
    </div>
  )
}

export default ActionPanel;