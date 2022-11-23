
export class Map {
    maxPlayers = 2
    constructor(name, shape, dimensions, map){
    this.name = name
    this.shape = shape
    this.dimensions = dimensions
    this.map = map// array of MapLines/bidimentional array
    }
    getFormation(fromTileId){       

      for (let row of this.map){
        for (let tile of row){
            if(tile.id === fromTileId){
                return tile.formation;
            }
        }
    }
    }
    placeFormation(formation, tileId){

        for (let row of this.map){
            for (let tile of row){
                if(tile.id === tileId){
                    tile.formation = formation;
                }
            }
        }
    }
    deleteFormation(tileId){

        for (let row of this.map){
            for (let tile of row){
                if(tile.id === tileId){
                    tile.formation = null;
                }
            }
        }
    }
    moveFormation(fromTileId, toTileId){
        const formation = this.getFormation(fromTileId);
        this.placeFormation(formation, toTileId);
        this.deleteFormation(fromTileId);
        return 0;
    }  
}