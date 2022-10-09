import React from 'react';
import css from './gameTile.module.css'
import Token from '../token/Token'


/*
import blank from '../../assets/tile_images/blank.png';
import plains from '../../assets/tile_images/plains.png';
import forest from '../../assets/tile_images/forest.png';
import hills from '../../assets/tile_images/hills.png';
import swamp from '../../assets/tile_images/swamp.png';
import mountains from '../../assets/tile_images/mountains.png';
 */

const allTilesImages = {
  blank :   '../../assets/tile_images/blank.png',
  plains :   '../../assets/tile_images/plains.png',
  forest :   '../../assets/tile_images/forest.png',
  hills :   '../../assets/tile_images/hills.png',
  swamp :   '../../assets/tile_images/swamp.png',
  mountains :   '../../assets/tile_images/mountains.png'
}

const GameTile = ({id, posLeft, posTop, image, func=null, showId=false, formation=null }) => {

  const tileImage = image ? allTilesImages[image] : allTilesImages['blank'];
  console.log(tileImage)
  return (
    <div
    id={id}
    className={css.Tile}
    onClick={func} 
    style={{
      backgroundImage:`url(${tileImage})`, 
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