import React from 'react';

import DoneBtn from './panelComponents/DoneBtn';
import css from './actionPanel.module.css';
import { generalActions } from '../../dummyDatabse/generalActions';
import { useSelector } from 'react-redux';

const ActionPanel = ({formation}) => {

    const currentFormation = useSelector(state => state.temp.formation);

    const clickedAction = (e) => {
        console.log("clicked action", e.target.name)
   }

    const showSkills = () =>{

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

        {formation && !formation.isBeen && currentFormation ? <div className={css.groupActionButtons}>
            {
                generalActions.map((action, i) => (
                    <button 
                    name={action} 
                    className={css.actionButton} 
                    key={i}
                    onClick={clickedAction}
                    >
                        {action}
                    </button>
                ))
            }
            {showSkills()}
            
        </div> : null
        }
    </div>
  )
}

export default ActionPanel;