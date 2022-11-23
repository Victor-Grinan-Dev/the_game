import React from 'react';

//style
import css from './gameTile.module.css';

//components
import Token from '../token/Token';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setCampaign } from '../../features/gameSlice';

import { setCenterTile, setFormation, setIsFilterUp } from '../../features/tempSlice';

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
    return state.campaign;
  });

  const objectMap = useSelector(state => {
    return state.game.campaign.map;
  })

  const gameMap = useSelector(state => {
    return state.game.campaign.map.map;
  });

  const centerTile = useSelector((state) => {   
    return state.temp.centerTile;
  })

  const currentFormation = useSelector((state) => {
    return state.temp.formation;
  })

/*
  const isToken = useSelector((state) => {
    return state.temp.isToken;
  })
  
  const isOwner = useSelector((state) => {
    return state.temp.isOwner;
  })
    const playerUsername = useSelector((state) => {
    return state.game.user;
  })

  const userObject = useSelector((state) => {
    return state.game.userObject;
  })

    const armyList = useSelector((state) => {
    return state.game.armyList;
  })

   const checkIsOwner = () => {
  dispatch(setIsOwner(formation.owner === armyName)) ;
 }
*/

  const isFilterUp = useSelector((state) => {
    return state.temp.isFilterUp;
  })



  const armyName = useSelector((state) => {
    return state.game.armyName;
  })



  const updateMap = (newMapArray) => {
    const tempMap = { ...objectMap, "map": newMapArray};
    dispatch(setCampaign({ ...campaign, "map":tempMap}));
  }
  
  const showSelectedTiles = () => {
    const resetedFiltersMap = deselectTiles()
    const mapWithHiglights = higlightedMap(tileObject, resetedFiltersMap, "selected");
    dispatch(setIsFilterUp(true));
    updateMap(mapWithHiglights)
  }

  const deselectTiles = () => {
    dispatch(setIsFilterUp(false));
    const mapNoHiglights = deselectAllTiles( gameMap );
    updateMap(mapNoHiglights);
    return mapNoHiglights;
  }

  const moveToken = (toTileId) => {
    const movedMap = moveFormation(currentFormation, centerTile.id, toTileId, gameMap);
    updateMap(movedMap);
  }




const detectClick = (e) => {
    const clicked = e.target.classList[0].split("_")[0];
    
    console.log(clicked)

    //4 - detect if canceled the last action/deselect tiles.
    if(isFilterUp){
      deselectTiles()
    }

    if (clicked === "token" && formation.owner === armyName){
     
     dispatch(setCenterTile(tileObject));
     dispatch(setFormation(formation))
     showSelectedTiles();
    }else if(e.target.attributes.name.value === "filter_selected"){
      
      moveToken(id)
      console.log(centerTile.id, id)
    }else if (clicked === "gameTile"){
      dispatch(setCenterTile(tileObject));
      dispatch(setFormation(null))
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
        {formation && <Token formation={formation} /> }
        {/* NEXT LINE SHOWS JUST YOUR ARMY */}
        {/* formation && (formation.owner === armyName) ? <Token formation={formation} /> : null  */}
      </div>

    {
      status === 'hostile' ? <div name={`filter_${status}`} className={css.tileFilter}
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {
      status === 'unexplored' ? <div name={`filter_${status}`} className={css.tileFilter}
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {/* status === 'selected' && currentFormation.movement > 0 && isFilterUp &&  */
       status === 'selected' ? <div name={`filter_${status}`} className={css.tileFilter}
        style={{
          backgroundImage:`url(${filterImage})`,
        }} /> : null
    }
    {/*
      //1 - detect clicked a token for a command. TODO add condition isOwner
      isToken && formation && id === centerTile?.id && isOwner && !formation.isBeen ? <div name="actionMenu" className={css.actionMenu}>
        
        <button className={css.tileButton} name="move" >{currentFormation.movement}x Move  </button>
        
      </div> : null
  */}
    </div>
  )
}

export default GameTile;


//TODOS mvp:
/**** move ****/


/**** end my turn and reset my turn ****/


//create action cancel to reset only one token action.

//create button nextTurn(done) => all tokens freezes and commands are saved to compare with other players commands.
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
 