import React from 'react';
import css from './token.module.css';

//hooks:
//redux:
//components:
//style:
//function and objects:

const allUnitsImage = {
  infantry : '/assets/units/infantry.png',

}

function Token({formation}) {
  let color;
  let name;
  let points;

  const image = allUnitsImage['infantry'];

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
      style={{
        backgroundImage:`url(${image})`,
      }}
      >
        </div>
        <p className={css.tokenPoints}>{points} pts</p>
      </div>
    </div>
  )
}

export default Token;