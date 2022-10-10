
import GameTile from "../components/tile/GameTile";
const mapAreaStyle ={
    backgroundColor:"black",
    position:"absolute"
}

//hard coded variables:
    const side = 75
    const topStart = 0;
    const leftStart = 0;

//logic variables:
    const evenLeftStart = leftStart + side * 0.5;
    const left = side; //incrementor 
    const top = side * 0.75; //incrementor 

const handleLeft = (y, x) => {
    if(y % 2 !== 0) {
        return leftStart + left * x
    } else {
        return evenLeftStart + left * x
    }
}

export const gameMapReader = (mapbject, action=null, showTilesId=false) => {
    //map is a nested array 
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
                            posTop={topStart + top * y} 
                            posLeft={handleLeft(y, x)} 
                            tileWidth={side} 
                            tileHeight={side + 5}
                            func={action} 
                            
                            //varible items
                            objective={tile.objective} 
                            formation={tile.formation}
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