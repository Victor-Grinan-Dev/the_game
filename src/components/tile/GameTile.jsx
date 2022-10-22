import React, { useEffect, useState } from 'react';

//style
import css from './gameTile.module.css';

//components
import Token from '../token/Token';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setArmyList, setCampaign, updateAFormation } from '../../features/gameSlice';

import { setCenterTile, setFormation, setIsToken, setIsFilterUp, setIsOwner } from '../../features/tempSlice';

//functions
import { higlightedMap, deselectAllTiles } from '../../functions/adjacents';
import { moveFormation } from '../../functions/moveToken';

//app data
import { importedTileImages } from '../../dummyDatabse/tileImages';
import { applyFilter } from '../../dummyDatabse/tilesFilters';
import { gameMapReader } from '../../functions/gameMapReader';

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

  const isOwner = useSelector((state) => {
    return state.temp.isOwner;
  })

  const playerUsername = useSelector((state) => {
    //console.log(state.temp.isFilterUp);
    return state.game.user;
  })

  const userObject = useSelector((state) => {
    //console.log(state.game.userObj)
    return state.game.userObject;
  })
  const armyName = useSelector((state) => {
    //console.log(state.temp.isFilterUp);
    return state.game.armyName;
  })

  const armyList = useSelector((state) => {
    //console.log(state.game.armyList);
    return state.game.armyList;
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

    updateMap(movedMap);
  }

 const checkIsOwner = () => {
 // console.log(playerUsername, armyName, playersFormations);
  //console.log(formation.owner, "==" ,armyName, formation.owner === armyName)
  dispatch(setIsOwner(formation.owner === armyName)) ;
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
    //console.log(currentFormation.movement)
    //console.log(currentFormation.name, 'from', centerTile.id, 'moving to', e.target.offsetParent.attributes.id.value)
    moveToken(e.target.offsetParent.attributes.id.value);
    dispatch(setIsToken(false));
    
  }else if(e.target.attributes.name.value === "tile"){//this element is a tile 
   //e.target;
    dispatch(setIsToken(false));

  //1 - detect clicked a token for a command:
  }else if(e.target.offsetParent.attributes.name.value === "tile"){//this element parent is a tile (clicked a token)  

    //set the center tile
    tileElement = e.target.offsetParent;
    dispatch(setCenterTile(tileObject));
    dispatch(setIsToken(true));
    dispatch(setFormation(formation));
    tokenElement = e.target;

    //4 - check ownership of token.
    checkIsOwner()

    console.log("clicked", e.target.attributes.name?.value, "at", e.target.offsetParent.attributes.id?.value)


  //1 - detect clicked a token for a command:
  }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){// this element grand parent is a tile (clicked an unit icon)
    
    //set the center tile
    dispatch(setCenterTile(tileObject));
    tileElement = e.target.offsetParent.offsetParent;

    
    dispatch(setIsToken(true));
    dispatch(setFormation(tileObject.formation));
    tokenElement = e.target.offsetParent;
    
    //4 - check ownership of token.
    checkIsOwner(e.target.attributes.name.value)

    console.log("clicked", e.target.attributes.name.value, "at", e.target.offsetParent.offsetParent.attributes.id.value)
    
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
      status === 'hostile' ? <div name={`filter_${status}`} className={css.tileFilter}
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {
      status === 'selected' && currentFormation.movement > 0 ? <div name={`filter_${status}`} className={css.tileFilter}
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {
      //1 - detect clicked a token for a command. TODO add condition isOwner
      isToken && formation && id === centerTile?.id && isOwner && !formation.isBeen ? <div name="actionMenu" className={css.actionMenu}>
        
        <button className={css.tileButton} name="move" >{currentFormation.movement}x Move  </button>
        
      </div> : null
    }
    </div>
  )
}

export default GameTile;


//TODOS mvp:
/**** move ****/
//if token has no move option token is exhasted. isBeen=true

/**** end my turn and reset my turn ****/

//create button reset to cancel all actions commanded and start again.
//create action cancel to reset only one token action.

//create button nextTurn => all tokens freezes and commands are saved to compare with other players commands.
//once a player units hasBeen save commands to commandsDatabase(in time order)

/**** info ****/
//create info panel (top)
//if player clicks his token can see formation info and/or tile info.
//if player clicks hostile token can see formation info and/or tile info.

/**** sight & tile status ****/
//tiles status is outOfSight if no own token has line of sight with it.

/**** commands ****/
//create command panel (bottom)
//move all commands to command panel on token click

//TODO mvp lvl2:
//auto battle system.

//TODO levl3:
//if token moves can't do other actions but move until max movement reach or stay.

//other action than move. (general for all)
//stay  
//search
//build
//heal
//setDefence
//getReady/overwatch

/**** special actions *****/
//charge
//jump
//siege
//turbo-bust
//sabotage
//booby-Trap
//hide & ambush

/**** each terrain different effect to formation ****/
//hill give visibility +1
//forest allows to hide
//swamp + search luck

/**** cities & buildings ****/
 