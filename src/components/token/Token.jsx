import React from 'react';
import css from './token.module.css';
//hooks:
//redux:
//components:
//style:
//function and objects:
function Token({formation}) {
  let color;
  let name;
  let points;;

  color = formation.color;
  name = formation.name;
  points = formation.points;
  return (
    <div 
    className={css.token}
    style={{
      backgroundColor: `${color}`
    }}
    >
      <div className={css.tokenContent}>
      <div className={css.tokenIcon}
      >
         
         unit icons
        </div>
        <p className={css.tokenName}>{name}</p>
        <p className={css.tokenPoints}>{points} pts</p>
      </div>
    </div>
  )
}

export default Token;