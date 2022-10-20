import React, { useEffect, useState } from 'react';

//style
import css from './gameTile.module.css';

//components
import Token from '../token/Token';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setCampaign } from '../../features/gameSlice';

import { setCenterTile, setFormation, setIsToken, setIsFilterUp } from '../../features/tempSlice';

//functions
import { higlightedMap, deselectAllTiles } from '../../functions/adjacents';
import { moveFormation } from '../../functions/moveToken';

//app data
import { importedTileImages } from '../../dummyDatabse/tileImages';
import { applyFilter } from '../../dummyDatabse/tilesFilters';

const GameTile = ({id, posLeft, posTop, image, tileObject, showId=false, formation=null, status=null}) => {
  const dispatch = useDispatch();
  
  const tileImage = image ? importedTileImages[image] : null;
  const filterImage = status ? applyFilter[status] : null;

  const campaign = useSelector(state => {
    //console.log('state:', state.game.campaign.map);
    return state.campaign;
  });

  const objectMap = useSelector(state => {
    //console.log('game map state:', state.game.campaign.map);
    return state.game.campaign.map;
  })

  const gameMap = useSelector(state => {
    //console.log('game map state:', state.game.campaign.map.map);
    return state.game.campaign.map.map;
  });

  const centerTile = useSelector((state) => {   
    return state.temp.centerTile;
  })

  const currentFormation = useSelector((state) => {
    return state.temp.formation;
  })

  const isToken = useSelector((state) => {
    //console.log(state.temp.isToken);
    return state.temp.isToken;
  })

  const isFilterUp = useSelector((state) => {
    //console.log(state.temp.isFilterUp);
    return state.temp.isFilterUp;
  })

  const updateMap = (newMapArray) => {
    const tempMap = { ...objectMap, "map": newMapArray};
    dispatch(setCampaign({ ...campaign, "map":tempMap}));
  }
  
  const showSelectedTiles = () => {
    dispatch(setIsFilterUp(true));
    const mapWithHiglights = higlightedMap(tileObject, gameMap, "selected");
    updateMap(mapWithHiglights)
  }

  const deselectTiles = () => {
    dispatch(setIsFilterUp(false));
    const mapNoHiglights = deselectAllTiles( gameMap );
    updateMap(mapNoHiglights)
  }

  const moveToken = (toTileId) => {
    const movedMap = moveFormation(currentFormation, centerTile.id, toTileId, gameMap);

    console.log('army', currentFormation.owner, 'moving', currentFormation.name, 'from', centerTile.id, 'to', toTileId);
    //console.log(movedMap);

    updateMap(movedMap);
  }


const detectClick = (e) => {
  
  //0 - detect what tile is clicked:
  let tileElement;
  let tokenElement;
  
  //4 - detect if canceled the last action/deselect tiles.
  if(isFilterUp){
    deselectTiles();
  }

  //2 - detect if clicked an action.
  if ( e.target.attributes.name.value === 'move'){

    showSelectedTiles();
    //console.log('moving options');
  
  //3 - detect if confirm a action.(move)
  }else if(e.target.attributes.name.value === "filter_selected"){

    //console.log(currentFormation.name, 'from', centerTile.id, 'moving to', e.target.offsetParent.attributes.id.value)
    moveToken(e.target.offsetParent.attributes.id.value);
    dispatch(setIsToken(false));
    
  }else if(e.target.attributes.name.value === "tile"){//this element is a tile 
   //e.target;
    dispatch(setIsToken(false));

  }else if(e.target.offsetParent.attributes.name.value === "tile"){//this element parent is a tile (clicked a token)  
    dispatch(setIsToken(true));
    tileElement = e.target.offsetParent;
    //1 - detect clicked a token for a command.
    console.log("clicked", e.target.attributes.name?.value, "at", e.target.offsetParent.offsetParent.attributes.id?.value)
    if(e.target.attributes.name.value === 'token'){
      tokenElement = e.target;
      dispatch(setCenterTile(tileObject));
      dispatch(setFormation(formation));
    }
    

  }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){// this element grand parent is a tile (clicked an unit icon)
    dispatch(setIsToken(true));
    dispatch(setCenterTile(tileObject));
    tileElement = e.target.offsetParent.offsetParent;

    //1 - detect clicked a token for a command.
    //console.log("clicked", e.target.attributes.name.value, "at", e.target.offsetParent.offsetParent.attributes.id.value)
    
    //2 - detect if clicked an action.
    if(e.target.offsetParent.attributes.name.value === 'token'){
      tokenElement = e.target.offsetParent;
      dispatch(setFormation(tileObject.formation));

    }  
  }
 
}

  return (
    <div
    id={id}
    className={css.Tile}
    name="tile"
    onClick={detectClick} 
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
      //1 - detect clicked a token for a command.
      isToken && formation && id === centerTile?.id ? <div name="actionMenu" className={css.actionMenu}>
        <button name="move">Move</button> 
      </div> : null
    }
    </div>
  )
}

export default GameTile;

