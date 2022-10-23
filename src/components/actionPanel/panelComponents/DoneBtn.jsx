import React from 'react';
import css from '../actionPanel.module.css';

const DoneBtn = () => {

    const saveOrders = () => {
        //dispatch(setCampaign({...campaign, "savedMap":gameMapObj.map}))
        console.log("map to save")
    }
  return (
    <button className={css.nextButton} onClick={saveOrders} >Done</button>
  )
}

export default DoneBtn;