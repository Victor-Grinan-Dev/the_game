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

  export const moveFormation = (formation, fromTileId, toTileId, oldMap)=> {

    let newFormation;
    let nestedArray = deselectAllTiles(oldMap);
    
    //check hostile adjacent tile of destination tile before placing formation:
    let tileObj = findTileObjById(toTileId, nestedArray);
    //console.log('found by id', tileObj)
    const allAdjacents = listAdjacents(tileObj, nestedArray)
    //console.log(formation.owner)
    //console.log(allAdjacents)
    const isHostile = isDestinationTileAdjToHostile(allAdjacents, formation.owner);
    console.log("destination:",toTileId,"hostile:", isHostile)
    if(isHostile){

        tileObj = {...tileObj, 'status':"hostile"};
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0
        };
        nestedArray = changeTile(tileObj, nestedArray);
       
    }else if(formation.movement - 1 <= 0){
        
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0
        };
        
    }else{
        newFormation = {...formation, "movement": formation.movement - 1};
    }

    const duplicatedMap = placeFormation(newFormation, tileObj.id, nestedArray);
    
    const newMap = deleteFormation(fromTileId, duplicatedMap);

    return newMap;
  }  