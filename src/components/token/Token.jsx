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
  const [unitCount, setUnitCount] = useState(formation.composition.length);

  const deleteToken = (parentElement) => { 
    parentElement.innerHTML = ""
  }

  const activateToken = (e) => {
    console.log();
    if (e.target.attributes.name.value === "token"){
      deleteToken(e.target.offsetParent)
    }
  }

  return (
    <div 
    className={css.token}
    name="token"
    style={{
      backgroundColor: `${color}`
    }}
    onClick={activateToken}
    >
      {
        units.map((unit) => {
          return <div name={name} className={css.tokenIcon} key={unit.id} style={{
            backgroundImage:`url(${unitsImages[unit.skills.type]})`,
            backgroundSize: unitCount===1 ? "50px 50px" : "30px 30px",
            width:unitCount===1 ? "50px" : "30px",
            height: unitCount===1 ? "50px" : "30px",
        }} /> 
        })
      }
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