import React from 'react';
import { useSelector } from 'react-redux';

const InfoPanel = () => {
  
  const phase = useSelector(state => state.temp.phase)
  const info = useSelector(state => state.temp.info);
  const turn = useSelector(state => state.temp.turn);
  return (
    <div>
      <div>
        {turn > 0 && <p>{turn}</p>} <p>{phase}</p>
      </div>

      <div>
        <p>{info}</p>
      </div>
    </div>
    

  )
}

export default InfoPanel;