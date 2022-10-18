import React, { useState } from 'react';

//style
import css from './gameTile.module.css';

//components
import Token from '../token/Token';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setMap } from '../../features/gameSlice';

//functions
import { highLightAdjacents, higlightedMap } from '../../functions/adjacents';

//app data
import { importedTileImages } from '../../dummyDatabse/tileImages';
import { applyFilter } from '../../dummyDatabse/tilesFilters';

const GameTile = ({id, posLeft, posTop, image, tileObject, showId=false, formation=null, status=null}) => {
  const dispatch = useDispatch();
  
  const tileImage = image ? importedTileImages[image] : null;
  const filterImage = status ? applyFilter[status] : null;

  const [isSelectedMoveTiles, setIsSelectedMoveTiles] = useState(false)
  const [isClicked, setIsClicked] = useState(false); 

  let campaign = useSelector(state => {
    //console.log('state:', state.game.campaign.map);
    return state.campaign;
  });

  let gameMap = useSelector(state => {
    //console.log('game map state:', state.game.campaign.map.map);
    return state.game.campaign.map.map;
  });

  const showSelectedTiles = () => {
    const mapWithSHiglights = higlightedMap(tileObject, gameMap);
    
    console.log(mapWithSHiglights)

    return 0
  }


  const tileclickedHandler = (e) => {

    if(e.target.attributes.name.value === "filter_selected"){
      
    }

    let tileElement;
    if(e.target.attributes.name.value === "move" && !isSelectedMoveTiles){
      //console.log("move")

      showSelectedTiles();

    //}else if(e.target.attributes.name.value !== "filter" && isSelectedMoveTiles){
    //  deSelectedTiles();
    
    }else if (e.target.attributes.name.value === "tile"){
      tileElement = e.target;

    }else if(e.target.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent;

  
    }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent.offsetParent;
    } 

    setIsClicked(!isClicked)
    console.log("tile:", tileElement?.id, tileElement?.childNodes)
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

    {
      filterImage && <div name={`filter_${status}`} className={css.tileFilter}
        style={{
          backgroundImage:`url(${filterImage})`,
        }} />
    }

    {
      isClicked && formation ? <div name="actionMenu" className={css.actionMenu}>
        <button name="move">Move</button> 
      </div> : null
    }
    </div>
  )
}

export default GameTile;

/*
let map = campaign.map;

  const showSelectedTiles = () => {
    const adjacents = listAdjacents(tileObject, map.map);
    adjacents.forEach(tile => {
      tile.status = 'selected';
      map.map = changeTile(tile, map.map);
    })
    campaign.map.map = map.map;
    dispatch(setCampaign(campaign.map.map))//ERROR TO DISPATCH A MAP AS A CAMPAIGN
    setIsSelectedMoveTiles(true);
  }

  const deSelectedTiles = () => {
    const adjacents = listAdjacents(tileObject, map.map);
    adjacents.forEach(tile => {
      tile.status = 'onSight';
      map.map = changeTile(tile, map.map);
    })
    campaign.map.map = map.map;
    dispatch(setCampaign(campaign.map.map))
    setIsSelectedMoveTiles(false);
  }
*/