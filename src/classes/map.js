

const planes = new Terrain("planes", 1, 0, 0, false, false, true, [], null);
const hills = new Terrain("hills", 2, 1, 1, true, true, true, [], "vision+1");
const forest = new Terrain("forest", 2, 1, 2, true, true, false, [], "luck+4");
const swamps = new Terrain("swamps", 1, 2, -1, false, false, false, [], "luck+9");
const mountains = new Terrain("mountains", 5, 5, 3, true, true, false, [], null);

export const terrainTypes = {
  planes: planes,
  hills: hills,
  forest: forest,
  swamps: swamps,
  mountains: mountains
}

export class Tile {
    owned_by = undefined
    formation = null
    resources = []
    buildings = []
    objective = false
    actions = []
    image = undefined
    is_starting_position = false

    constructor(id, terrain){
        this.id = id  
        this.terrain = terrain
        if(terrain){
            this.image = this.terrain.image  
        }else{
            this.image = null
        }
        
    }

}

export class Map {
    maxPlayers = 2
    constructor(name, shape, dimensions, map){
    this.name = name
    this.shape = shape
    this.dimensions = dimensions
    this.map = map// array of MapLines/bidimentional array
    this.setMaxPlayers();
    }
    getFormation(fromTileId){       
      this.map.map((row)=>{
          row.map((tile)=>{
              if (tile.id === fromTileId){
                  return tile.formation
              }
          })
      });
    }
    placeFormation(formation, tileId){
        this.map.map((row)=>{
            row.map((tile)=>{
                if (tile.id === tileId){
                    tile.formation = formation
                    return
                } 
            })
        })
    }
    deleteFormation(tileId){
        this.map.map((row)=>{
            row.map((tile)=>{
                if (tile.id === tileId){
                    tile.formation = null
                    return
                }
            })
        })
    }
    moveFormation(fromTileId, toTileId){
        const formation = this.getFormation(fromTileId);
        this.placeFormation(formation, toTileId);
        this.deleteFormation(fromTileId);
    }
    setMaxPlayers(){
      this.map.map(row => {
        row.map(tile => {
          if(tile.is_starting_position){
            this.maxPlayers += 1
          }
        })
      })
    }
}