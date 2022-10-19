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
    const mapWithHiglights = higlightedMap(tileObject, gameMap, "selected");
    const tempMap = { ...objextMap, "map": mapWithHiglights}
    dispatch(setCampaign({ ...campaign, "map":tempMap}))
    return 0
  }

  const hideSelectedTiles = () => {//not working
    const mapNoHiglights = higlightedMap(tileObject, gameMap);
    const tempMap = { ...objextMap, "map": mapNoHiglights}
    dispatch(setCampaign({ ...campaign, "map":tempMap}))
    return 0
  }


  const tileclickedHandler = (e) => {
    
    if(e.target.attributes.name.value === "filter_selected"){
      
    }

    let tileElement;
    if(e.target.attributes.name.value === "move" && !isSelectedMoveTiles){
      console.log("move!")
      setIsClicked(true)
      showSelectedTiles();

    //}else if(e.target.attributes.name.value !== "filter" && isSelectedMoveTiles){
    //  deSelectedTiles();
    
    }else if (e.target.attributes.name.value === "tile"){
      tileElement = e.target;
      //console.log(e.target.childNodes[0].attributes.name.nodeValue === "token");
      setIsClicked(!isClicked);

      if(e.target.attributes.name.nodeValue !== "filter_selected"){
        //close filters
        console.log("clicked out, close filters and actionMenu")
      }

    }else if(e.target.offsetParent.attributes.name.value === "tile"){
      if(e.target.offsetParent.attributes.name.value === "tile" && e.target.attributes.name.nodeValue !== "filter_selected"){
        //close filters
        console.log("clicked out, close filters and actionMenu")
      }else if(e.target.attributes.name.nodeValue === "filter_selected"){
        console.log("move to:", e.target.offsetParent.attributes.name.value)
      }
      tileElement = e.target.offsetParent;
      console.log(e.target.attributes.name.nodeValue );
      setIsClicked(true)
    }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){
      tileElement = e.target.offsetParent.offsetParent;
      if(e.target.attributes.name.nodeValue !== "filter_selected" && e.target.attributes.name.nodeValue !== "move" && isClicked){
        //close filters
        console.log("clicked out, close filters")
      }
    } 
    setIsClicked(true)
    //console.log("tile:", tileElement, tileElement?.childNodes)
    //console.log("tile:", tileElement?.id, tileElement?.childNodes)
  }

  useEffect(() => {
    //console.log("isclicked", isClicked)
  }, [isClicked]);

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