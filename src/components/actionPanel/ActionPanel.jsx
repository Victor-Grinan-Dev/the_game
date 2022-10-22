import React from 'react';
import css from './actionPanel.css';
const ActionPanel = ({formation}) => {

    console.log(formation)
  return (
    <div>
        {formation?.composition?.map(unit =>(
            unit.skills?.active?.map((skill, i) => (
                <button className={css.actionButton} key={i}>{skill}</button>
            ))
            
        ))}
    </div>
  )
}

export default ActionPanel;