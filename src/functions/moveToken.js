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

  export const moveFormation = (formation, fromTileId, toTileId, oldMap)=> {
    const nestedArray = deselectAllTiles(oldMap);
    const duplicatedMap = placeFormation(formation, toTileId, nestedArray);
    return deleteFormation(fromTileId, duplicatedMap);
  }  