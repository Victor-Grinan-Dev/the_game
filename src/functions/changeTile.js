export const changeTile = (newTile, map) => {
    const newMap = [];
    for (let row of map){
        const newRow = [];
        for (let tile of row){
            if(tile.id === newTile.id){
                newRow.push(newTile);
            }else{
                newRow.push(tile);
            }
        }
        newMap.push(newRow);
    }
    return newMap;
} 