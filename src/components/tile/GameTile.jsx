import React, { useState } from 'react';
import css from './gameTile.module.css';
import Token from '../token/Token';
import { importedTileImages } from '../../dummyDatabse/tileImages';
import { applyFilter } from '../../dummyDatabse/tilesFilters';
import { campaignSelector, setCampaign } from '../../features/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { listAdjacents } from '../../functions/adjacents';
import { changeTile } from '../../functions/changeTile';

const GameTile = ({id, posLeft, posTop, image, tileObject, showId=false, formation=null, status=null}) => {
  const dispatch = useDispatch();
  const campaign = useSelector(campaignSelector);
  let map = campaign.map;
  const [isClicked, setIsClicked] = useState(false);  
  const tileImage = image ? importedTileImages[image] : null;
  const filterImage = status ? applyFilter[status] : null;

  const tileclickedHandler = (e) => {
 
    let tileElement;
    if(e.target.offsetParent.attributes.name.value === "actionMenu"){
      
      
      const adjacents = listAdjacents(tileObject, map.map);
      adjacents.forEach(tile => {
        tile.status = 'selected';
        map.map = changeTile(tile, map.map);
      })
      campaign.map.map = map.map;
      dispatch(setCampaign(campaign.map.map))
      

    }else if (e.target.attributes.name.value === "tile"){
      tileElement = e.target;
      //console.log(id, "tile clicked");
      //console.log("left:", e.target.offsetLeft)
      //console.log("top:", e.target.offsetTop)
      //console.log("top:", e.target.classList.add("selected"))
    }else if(e.target.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent;
      //console.log(id, "child clicked");
      //console.log("left:", e.target.offsetParent.offsetLeft)
      //console.log("top:", e.target.offsetParent.offsetTop)
  
    }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent.offsetParent;
      //console.log(id, "grandchild clicked");
      //console.log("left:", e.target.offsetParent.offsetParent.offsetLeft)
      //console.log("top:", e.target.offsetParent.offsetParent.offsetTop)
    } 

    setIsClicked(!isClicked)
  }

  return (
    <div
    id={id}
    className={css.Tile}
    name="tile"
    onClick={tileclickedHandler} 
    style={{
      backgroundImage:`url(${tileImage})`, //not working
      left:`${posLeft}px`,
      top:`${posTop}px`,
    }}
    >
      <div className="tileContent" name="token">
        {showId && <p>{id}</p>}
        {formation && <Token formation={formation} />}
      </div>
      <div name='filter' className={css.tileFilter}
      style={{
        backgroundImage:`url(${filterImage})`,
      }} />

    {
      isClicked && formation ? <div name="actionMenu" className={css.actionMenu}>
        <button name="move">Move</button> 
      </div> : null
    }
    </div>
  )
}

export default GameTile;