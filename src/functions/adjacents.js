
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