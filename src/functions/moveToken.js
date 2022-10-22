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
    let fromTileOj = findTileObjById(fromTileId, nestedArray);

    const destTile_moveIn = toTileObj.terrain.move_in_action;
    const origTile_moveOut = fromTileOj.terrain.get_out_action;

    //logic:
    //console.log(fromTileOj);
    console.log("getting out of", fromTileOj.terrain.name ,"takes:", origTile_moveOut)
    console.log("getting in", toTileObj.terrain.name,"takes:",destTile_moveIn, );
    console.log(formation.name, "M:",formation.movement,formation.movement - (origTile_moveOut + destTile_moveIn) >= 0) 


    //console.log('found by id', toTileObj)
    const allAdjacents = listAdjacents(toTileObj, nestedArray);
    //console.log(formation.owner)
    //console.log(allAdjacents)
    const isHostile = isDestinationTileAdjToHostile(allAdjacents, formation.owner);
    //console.log("destination:",toTileId,"hostile:", isHostile);
    if(isHostile){

        toTileObj = {...toTileObj, 'status':"hostile"};
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0
        };
        nestedArray = changeTile(toTileObj, nestedArray);
       
    }else if(formation.movement - (origTile_moveOut + destTile_moveIn) == 0){
        
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0
        };
        
    }else{
        newFormation = {...formation, "movement": formation.movement - ( origTile_moveOut + destTile_moveIn )};
    }

    const duplicatedMap = placeFormation(newFormation, toTileObj.id, nestedArray);
    
    const newMap = deleteFormation(fromTileId, duplicatedMap);

    return newMap;
  }  