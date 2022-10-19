
export const placeFormation = (formation, tileId, nestedArray)=> {
    nestedArray.map((row)=>{
          row.map((tile)=>{
              if (tile.id === tileId){
                  tile.formation = formation
              } 
          })
      })
      return 0;
  }


  export const deleteFormation = (tileId)=> {
      this.map.map((row)=>{
          row.map((tile)=>{
              if (tile.id === tileId){
                  tile.formation = null
              }
          })
      })
      return 0;
  }
  export const moveFormation = (fromTileId, toTileId)=> {
      const formation = this.getFormation(fromTileId);
      this.placeFormation(formation, toTileId);
      this.deleteFormation(fromTileId);
      return 0;
  }  