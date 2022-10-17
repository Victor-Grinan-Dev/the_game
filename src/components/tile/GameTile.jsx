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
  const [isSelectedMoveTiles, setIsSelectedMoveTiles] = useState(false)



  const showSelectedTiles = () => {
    const adjacents = listAdjacents(tileObject, map.map);
    adjacents.forEach(tile => {
      tile.status = 'selected';
      map.map = changeTile(tile, map.map);
    })
    campaign.map.map = map.map;
    dispatch(setCampaign(campaign.map.map))
    setIsSelectedMoveTiles(true);
  }

  const tileclickedHandler = (e) => {
 
    let tileElement;
    if(e.target.attributes.name.value === "move" && !isSelectedMoveTiles){
      showSelectedTiles();



    }else if (e.target.attributes.name.value === "tile"){
      tileElement = e.target;

    }else if(e.target.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent;

  
    }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent.offsetParent;
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