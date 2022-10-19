import React, { useEffect, useState } from 'react';

//style
import css from './gameTile.module.css';

//components
import Token from '../token/Token';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setCampaign, setMap } from '../../features/gameSlice';

//functions
import { higlightedMap } from '../../functions/adjacents';

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

  let objextMap = useSelector(state => {
    //console.log('game map state:', state.game.campaign.map);
    return state.game.campaign.map;
  })

  let gameMap = useSelector(state => {
    //console.log('game map state:', state.game.campaign.map.map);
    return state.game.campaign.map.map;
  });

  const showSelectedTiles = () => {
    const mapWithSHiglights = higlightedMap(tileObject, gameMap);
    const tempMap = { ...objextMap, "map": mapWithSHiglights}
    //console.log(mapWithSHiglights)
    dispatch(setCampaign({ ...campaign, "map":tempMap}))
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

  useEffect(() => {
   console.log(status, filterImage);
   
  }, [status]);

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