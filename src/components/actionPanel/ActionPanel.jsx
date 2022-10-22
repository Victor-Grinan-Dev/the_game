import React from 'react';
import css from './actionPanel.module.css';

const ActionPanel = ({formation}) => {

const generalActions = ['Search', 'Rest', 'Ready', 'split', 'join to']

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
            <button className={css.reset} >Reset</button>
            <button className={css.nextButton} >Next</button>

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