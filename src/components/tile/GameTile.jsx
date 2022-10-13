import React from 'react';
import css from './gameTile.module.css';
import Token from '../token/Token';
import { importedTileImages } from '../../dummyDatabse/tileImages';

const GameTile = ({id, posLeft, posTop, image, func=null, showId=false, formation=null }) => {
  
  const tileImage = image ? importedTileImages[image] : null;

  const tileclickedHandler = (e) => {
    console.log("x",e.clientX,"y", e.clientY);
    if (e.target.attributes.name.value === "tile"){
  
      console.log(id, "tile clicked");
  
    }else if(e.target.offsetParent.attributes.name.value === "tile"){
      
      console.log(id, "child clicked");
  
    }else if(e.target.offsetParent.offsetParent.attributes.name.value === "tile"){
      
      console.log(id, "grandchild clicked");
    }
    //console.log(e.target.offsetParent.attributes.name.value);
    //console.log(e.target.attributes.name.value === "token")
      
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
      <div className="tileContent">
        {showId && <p>{id}</p>}
        {formation && <Token formation={formation} />}
      </div>
      
    </div>
  )
}

export default GameTile;