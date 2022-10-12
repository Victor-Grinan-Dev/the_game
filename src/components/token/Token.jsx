import React, { useState } from 'react';
import css from './token.module.css';
import { unitsImages } from '../../dummyDatabse/unitsImages';
//hooks:
//redux:
//components:
//style:
//function and objects:



function Token({formation}) {
  const [color, setColor] = useState(formation.color);
  const [name, setName]= useState(formation.name);
  const [points, setPoints]= useState(formation.points);
  const [units, setUnits] = useState(formation.composition);

  const deleteToken = (parentElement) => {
    parentElement.innerHTML = ""
  }

  const activateToken = (e) => {
    console.log(e.target.offsetParent);
    console.log(e.target);
    console.log(formation);
    deleteToken(e.target.offsetParent)
  }

  return (
    <div 
    className={css.token}
    style={{
      backgroundColor: `${color}`
    }}
    onClick={activateToken}
    >
      <div className={css.tokenContent}>
        {
        <div className={css.tokenIcons}>
          {
          units.map((unit) => {
              return <div name={name} className={css.tokenIcon} key={unit.id} style={{backgroundImage:`url(${unitsImages[unit.skills.type]})`}} /> 
            })
          }
        </div>
        }
    
      </div>
    </div>
  )
}

export default Token;

/*
<div className={css.tokenIcon}
      style={{
        backgroundImage:`url(${image})`,
      }}
      >
        </div>
*/