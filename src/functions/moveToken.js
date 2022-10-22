import { deselectAllTiles } from "./adjacents";

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
    return 
  }

  export const moveFormation = (formation, fromTileId, toTileId, oldMap)=> {

    let newFormation;
    const nestedArray = deselectAllTiles(oldMap);
    
    if(formation.movement - 1 === 0){
        
        newFormation = {
            ...formation, 
                "isBeen": true,
                "movement": 0
        };
        
    }else{
        newFormation = {...formation, "movement": formation.movement - 1};
    }

    const duplicatedMap = placeFormation(newFormation, toTileId, nestedArray);
    
    const newMap = deleteFormation(fromTileId, duplicatedMap);

    return newMap;
  }  