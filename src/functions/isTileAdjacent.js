
//tiles are adjacent if return is true:

export const adjacents = (currentTile, checkTile, range=1) => {
    const currentTileY = currentTile.posY;
    const currentTileX = currentTile.posX;
    const checkTileY = checkTile.posY;
    const checkTileX = checkTile.posX;

    if(checkTileY === currentTileY){
        if(checkTileX === currentTileX - range || checkTileX === currentTileX + range){
            return true;
        }
    }

    if(currentTileY/2 === 0){//even rows (0,2,4 ...) => check: x = equal or more:
        if( checkTileY == currentTileY - range || checkTileY === currentTileY + range ){
            if( checkTileX == currentTileX || checkTileX == currentTileX + range ){
                return true;
            }
        }else{ //not even row(1,3,5 ...) => check less or equal:
            if( checkTileY == currentTileY - range || checkTileY === currentTileY + range ){
                if( checkTileX == currentTileX || checkTileX == currentTileX - range){
                    return true;
                }
            }  
        }
    }
}
 

 