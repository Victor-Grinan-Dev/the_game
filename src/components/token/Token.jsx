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
  let points;
  formation ? color= formation.color : color = 'brown';
  formation ? name = formation.name : name = 'unknown';
  formation ? points = formation.point_const : points = 100;
  return (
    <div 
    className={css.token}
    style={{
      backgroundColor: `${color}`
    }}
    >
      <div className={css.tokenContent}>
      <div className={css.tokenIcon}>
          icon
        </div>
        <p className={css.tokenName}>{name}</p>
        <p className={css.tokenPoints}>{points} pts</p>
      </div>
    </div>
  )
}

export default Token;