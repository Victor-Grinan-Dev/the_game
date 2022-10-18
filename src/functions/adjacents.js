export const changeTile = (newTile, map) => {
    //console.log("just got:", newTile.id, newTile.status)
    let newMap = [];
    for (let row of map){
        const newRow = [];
        for (let tile of row){
            if(tile.id === newTile.id){
                //console.log(tile.id, "to", newTile.status)
                newRow.push(newTile);
                //console.log("added newTile", newTile.id, newTile.status)
            }else{
                newRow.push(tile);
            }
        }
        console.log("added row", newRow)
        newMap.push(newRow);
        //console.log(newRow)
    }
    return newMap;
} 

//tiles are adjacent if return is true:
export const isAdjacent = (currentTile, checkTile, range=1) => { //takes twoo tiles objects
    const currentTileY = currentTile.posY;
    const currentTileX = currentTile.posX;
    const checkTileY = checkTile.posY;
    const checkTileX = checkTile.posX;
    
    if(typeof currentTile.id === "string" && typeof checkTile.id === "string"){
        if(checkTileY === currentTileY){//same row
            if(checkTileX === currentTileX - range){ //before
                return true;
            }else if(checkTileX === currentTileX + range){ //after
                return true;
            }
        }else if( currentTileY % 2 === 0 ){//even rows (0,2,4 ...) => check: x = equal or more:
            if( checkTileY === currentTileY - range || checkTileY === currentTileY + range){ 
                if( checkTileX === currentTileX || checkTileX === currentTileX + range ){ 
                    return true;
                }
            }
        }else if( currentTileY % 2 !== 0 ){//even rows (0,2,4 ...) => check: x = less or equal:
            if( checkTileY === currentTileY - range || checkTileY === currentTileY + range){ 
                if( checkTileX === currentTileX || checkTileX === currentTileX - range ){ 
                    return true;
                }
            }
        }
    }
    
    return false;
}

export const listAdjacents = (fromTile, map) => {
    const adjacents = [];
    for(let row of map){
        for(let checkTile of row){
            if(isAdjacent(fromTile, checkTile)){
                adjacents.push(checkTile);
            }
        }
    }
    return adjacents;
}

export const highLightAdjacents = (fromTile, map) => {

    let newMap;
    const higlighted = [];
    const adjacents = listAdjacents(fromTile, map);

    adjacents.forEach( tile => {
        if( !tile.formacion ){
            higlighted.push({ ...tile, "status":"selected" })
        };
        //if tile belongs to player set onsight (null no filter)
        //if player belong to enemy set hodtile (red filter)
    })

    return higlighted;
}


export function higlightedMap(fromTile, oldMap){
    const newMap = [];
    const adjacents = listAdjacents(fromTile, oldMap);

    for (let y = 0; y < oldMap.length; y++){

        const newRow = [];
        for(let newTile of adjacents){
            if (newTile.posY === y){
                newRow.push({ ...newTile, "status":"slected"} );
            }
        }
        for (let oldTile of oldMap[y]){
            let toPush = oldTile
            let isUnique = true
            for (let newTile of newRow){
                if(oldTile.id == newTile.id){
                    isUnique = false;
                }
            }
            if(isUnique){
                newRow.push(toPush)
            }
        }
        newMap.push(newRow);
    }
    return newMap;
}
