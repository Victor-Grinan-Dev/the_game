import { isMoveEnough, tokenIsBeen } from "./moveToken";

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
        //console.log("added row", newRow)
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

export const changeTileStatus = (tile, status) => {
    return { ...tile, "status":status }
}

/*
export const highLightAdjacents = (fromTile, map, status=null) => {

    const higlighted = [];
    const adjacents = listAdjacents(fromTile, map);
    const formation = fromTile.formation;
    let finalStatus = status;

    adjacents.forEach( tile => {
        const moveEnough = isMoveEnough(fromTile, tile, formation);
        
        //console.log(moveEnough)
        if( !tile.formacion ){

            //if movement isnt enough status = null.

            higlighted.push(changeTileStatus(tile, finalStatus));
        };
        //if tile belongs to player set onsight (null no filter)
        //if player belong to enemy set hodtile (red filter)
    })

    return higlighted;
}
*/

export const isHostileAdjacent = (fromTile, adjacentsList) => {

    let isHostile = false;
    let counter = 0;

    while (counter < adjacentsList.length){

        if(adjacentsList[counter].formation){//check if formation adjacent
            if(adjacentsList[counter].formation.owner !== fromTile.formation.owner){//check if hostile
                isHostile = true;
                break;
            }
        }
        counter++;
    }
  
    return isHostile;
}

export const isDestinationTileAdjToHostile = (adjacentsList, owner) => {
    let isHostile = false;
    let counter = 0;
    while (counter < adjacentsList.length){

        if(adjacentsList[counter].formation){
            if(adjacentsList[counter].formation.owner !== owner){
                isHostile = true;
                break;
            }
        }

        counter++;
        }

    return isHostile;
}

export function higlightedMap(fromTile, oldMap, status="selected"){

    let newMap = [];
    const adjacents = listAdjacents(fromTile, oldMap);

    if(!isHostileAdjacent(fromTile, adjacents)){
        for (let y = 0; y < oldMap.length; y++){

            const newRow = [];
            for(let newTile of adjacents){
                if (newTile.posY === y){
                    if(newTile.formation){//if there is an formation in this tile already
                        if(newTile.formation.owner === fromTile.formation.owner){// => if formation belongs to same army => no mark
    
                            newRow.push({ ...newTile, "status":"onSight"} );
                        }else{// => if formation belongs to other army mark red
                            newRow.push({ ...newTile, "status":"hostile"} );
                        }
                    }else{//there is no formation
                        const canMove = fromTile.formation.movement - (fromTile.terrain.get_out_action + newTile.terrain.move_in_action) >= 0;

                        if(!canMove){ //if can't move then dont give it as option to move.
                            newRow.push({ ...newTile, "status":"onSight"} );
                        }else{
                            newRow.push({ ...newTile, "status":status} );
                        }
                        
                    } 
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
            newMap.push(newRow.sort((a, b) => a.posX -b.posX));
        }
    }else{
        for (let y = 0; y < oldMap.length; y++){

            const newRow = [];
            for(let newTile of adjacents){
                if (newTile.posY === y){
                    if(newTile.formation){//if there is an formation in this tile already
                        if(newTile.formation === fromTile.formation){//check current tile
                            newRow.push(changeTileStatus(fromTile, 'hostile'));
                        }else if(newTile.formation.owner === fromTile.formation.owner){// => if formation belongs to same army
    
                            newRow.push(changeTileStatus(newTile, "onSight") );
                        }else{// => if formation belongs to other army mark red
                            newRow.push(changeTileStatus(newTile, "hostile") );
                        }
                    }else{
                        newRow.push({ ...newTile, "status":"onSight"} );
                    } 
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
            newMap.push(newRow.sort((a, b) => a.posX - b.posX));
        }
        let fromTileFormation = tokenIsBeen(fromTile.formation, true);
        //turn filter hostile //let fromTileFormation = ();
        let newFromtile = {...fromTile, 'formation': fromTileFormation}
        console.log(newFromtile)
        newMap = changeTile(newFromtile, newMap);
    }

    return newMap;
}

export const deselectAllTiles = (map) => {
    const newMap = [];
    for (let row of map){
        const newRow = [];
        for (let tile of row){
            if (tile.status === "selected" || tile.status === "selected"){
                newRow.push({ ...tile, 'status':'onSight'});
            }else{
                newRow.push(tile);
            }
        }
        newMap.push(newRow);
    }
    return newMap;
}