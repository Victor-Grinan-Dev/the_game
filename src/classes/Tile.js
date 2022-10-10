export class Tile {
    owned_by = undefined
    formation = null
    resources = []
    buildings = []
    objective = false
    actions = []
    is_starting_position = false

    constructor(id, terrain=null){
        this.id = id  
        this.terrain = terrain
    }
}