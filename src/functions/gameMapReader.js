import { side, topStart, leftStart, evenLeftStart, leftIncrementor, topIncrementor } from '../dummyDatabse/configureGame'
import GameTile from "../components/tile/GameTile";

const mapAreaStyle = {
    position:"relative"
}

const handleLeft = (y, x) => {
    if(y % 2 !== 0) {
        return leftStart + leftIncrementor * x
    } else {
        return evenLeftStart + leftIncrementor * x
    }
}

export const gameMapReader = (mapbject, action=null, showTilesId=false) => {
    const terrainMap = mapbject.map;
    return (
        <div className="mapArea" style={{mapAreaStyle}}>  
            {
                 terrainMap.map((row, y) => (
                     row.map((tile, x) => (       
                         tile.terrain && <GameTile 
                            key={tile.id} 
                            id={tile.id}

                            showId={showTilesId}
                            image={tile.terrain.image}  
                            posTop={topStart + topIncrementor * y} 
                            posLeft={handleLeft(y, x)} 
                            tileWidth={side} 
                            tileHeight={side + 5}
                            func={action}  

                            //game varible items
                            objective={tile.objective} 
                            formation={tile.formation}
                            status={tile.status}
                        />
                    ))
                ))
            }
        </div>
    )
}

/*
    gameMap.map.map((row, y) => (
      row.map((tile, x) => (
        console.log(tile),
        <GameTile 
        key={tile.id} 
        posTop={topStart + top * y} 
        posLeft={handleLeft(y, x)}
        image={tile?.terrain?.image}
        />
      ))
    ))
*/