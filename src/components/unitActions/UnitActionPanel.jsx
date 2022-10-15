import React from 'react';

const UnitActionPanel = () => {
  return (
    <div ref={ref} name="actionMenu" className={css.actionMenu}>
        <button name="move">Move</button> 
    </div> 
  )
}

export default UnitActionPanel;