import React from 'react';
import css from '../actionPanel.module.css'
import { generalActions } from '../../../dummyDatabse/generalActions';

const ActionButons = ({formation}) => {

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

    const clickedAction = (e) => {
        console.log(e.target.name) 
    }

  return (
    <div className={css.groupActionButtons}>
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
            
        </div> 
  )
}

export default ActionButons;