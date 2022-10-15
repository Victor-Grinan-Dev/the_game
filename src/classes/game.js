
export class Game {
   
    constructor(campaign){
        this.campaign = campaign
        this.map = this.campaign.map.map
    }

    render(){
        this.setVision();
    }

    listAdjacents(fromTile){
        const adjacents = [];
        for(let row of this.map){
            for(let checkTile of row){
                if(this.isAdjacent(fromTile, checkTile)){
                    adjacents.push(checkTile);
                }
            }
        }
        return adjacents;
    }

    setVision(){
        for(let row of this.map){
            for(let tile of row){             
                if (tile.formation){         
                    tile.status = "onSight";
                    tile.isExplored = true;
                    
                    //check all adjacent tiles
                    const adjacents = this.listAdjacents(tile);
                    adjacents.forEach(tile => {
                        tile.status = "onSight";
                    })
                }
            }
        }
    }

    selectAdjacents(tile){          
        const adjacents = this.listAdjacents(tile);
        adjacents.forEach(tile => {
            tile.status = "onSight";
        })
   
    }

    isAdjacent(currentTile, checkTile, range=1){
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
}