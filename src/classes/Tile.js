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