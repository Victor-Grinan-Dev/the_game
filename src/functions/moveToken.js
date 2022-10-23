import { changeTile, deselectAllTiles, isDestinationTileAdjToHostile, isHostileAdjacent, listAdjacents } from "./adjacents";

export const deleteFormation = (tileId, nestedArray)=> {

    //const nestedArray = deselectAllTiles(oldMap);

    const newMap = [];
    for (let row of nestedArray){
        const newRow = [];
        for (let tile of row){
            if(tile.id === tileId){
                newRow.push({ ...tile, "formation":null});
            }else{
                newRow.push(tile);
            }
        }
        newMap.push(newRow);
    }
    return newMap;
}

export const findTileObjById = (tileId, nestedArray) => {
    for (let row of nestedArray){
        for (let tile of row){
            if (tile.id === tileId){
                return tile;
            }
        }
    }
    return null;
}

export const placeFormation = (formation, toTileId, nestedArray)=> {

    //const nestedArray = deselectAllTiles(oldMap);

    const newMap = [];
    for (let row of nestedArray){
        const newRow = [];
        for (let tile of row){
            if(tile.id === toTileId){
                newRow.push({ ...tile, "formation":formation});
            }else{
                newRow.push(tile);
            }
        }
        newMap.push(newRow);
    }
    return newMap;
}

export const tokenIsBeen = (token, status) => {   
    return {...token, "isBeen": status};
}

export const reduceMovement = (token, amount = 1) => {
    return { ...token, 'movement':token.movement -= amount};
}

export const predictIfWillMove = (formation, fromTile, toTile, nestedArray) => {
    
    let willMove = false;

    const totalMovement = formation.movement;
    const fromTileMove = fromTile.terrain.get_out_action;
    const toTileMove = toTile.terrain.move_in_action;
    const fromFutureTile = toTile.terrain.get_out_action; 
    const futureAdjacents = listAdjacents(toTile, nestedArray)

    const predictedMove = totalMovement - (fromTileMove + toTileMove + fromFutureTile)
    console.log(predictedMove)

    if (totalMovement - predictedMove > fromFutureTile){

        for (let futAdj of futureAdjacents){
            //console.log("move left", formation.movement - toTileMove, futAdj.id, futAdj.terrain.move_in_action, (formation.movement - toTileMove) - (futAdj.terrain.move_in_action + fromFutureTile) >= 0)
            if ((formation.movement - toTileMove) - (futAdj.terrain.move_in_action + fromFutureTile) >= 0){
                willMove = true
            }
        }
    }

    return willMove;
}

export const isMoveEnough = (originTerrain, destinationTerrain, formation) => {
    let isEnough = true;

    if(formation.movement - (originTerrain + destinationTerrain) < 0){
        isEnough = false;
    }

    return isEnough;
}

  export const moveFormation = (formation, fromTileId, toTileId, oldMap)=> {


    let newFormation;
    let nestedArray = deselectAllTiles(oldMap);
    
    //check hostile adjacent tile of destination tile before placing formation:
    let toTileObj = findTileObjById(toTileId, nestedArray);
    const fromTileOj = findTileObjById(fromTileId, nestedArray);

    const destTile_moveIn = toTileObj.terrain.move_in_action;
    const origTile_moveOut = fromTileOj.terrain.get_out_action;

    //console.log(fromTileOj);
    console.log("getting out of", fromTileOj.terrain.name ,"takes:", origTile_moveOut)
    console.log("getting in", toTileObj.terrain.name,"takes:",destTile_moveIn, );
    console.log(formation.name, "M:",formation.movement,formation.movement - (origTile_moveOut + destTile_moveIn) >= 0) 

    const allAdjacents = listAdjacents(toTileObj, nestedArray);
    const isHostile = isDestinationTileAdjToHostile(allAdjacents, formation.owner);
    const willMove = predictIfWillMove(formation,fromTileOj,toTileObj, nestedArray);
    
    if(isHostile){

        toTileObj = {...toTileObj, 'status':"hostile"};
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0,
                "isMoved":true
        };
        nestedArray = changeTile(toTileObj, nestedArray);
       
    }else if(formation.movement - (origTile_moveOut + destTile_moveIn) == 0 || !willMove){
        
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0,
                "isMoved":true
        };
        
    }else{
        //just move
        const newMoveValue = formation.movement - ( origTile_moveOut + destTile_moveIn )
        newFormation = {
            ...formation,
                "movement": newMoveValue,
                "isMoved":true
            };
    }

    const duplicatedMap = placeFormation(newFormation, toTileObj.id, nestedArray);
    
    const newMap = deleteFormation(fromTileId, duplicatedMap);

    return newMap;
  }  

export const reActivateTokens = (nestedArray) => {
    const newMap = [];
    for (let row of nestedArray){
        const newRow = [];
        for (let tile of row){
            if(tile.formation){
                const tempformation = { 
                    ...tile.formation, 
                        "isBeen": false, 
                        "isMoved":false,
                        "movement":tile.formation.maxMovement
                };
                newRow.push({...tile, "formation":tempformation})
            }else{
                newRow.push(tile);
            }
        }
        newMap.push(newRow);
    }
    return newMap;
}