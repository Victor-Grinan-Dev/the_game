export class Tile {
    constructor(id, 
        terrain=null,
        
        formation = null,
        is_starting_position = false,
        objective = false,
        resources = [],
        buildings = [],
        actions = [],
        owned_by = undefined,
        ){
        this.id = id 
        this.terrain = terrain
        this.formation = formation
        this.is_starting_position = is_starting_position
        this.owned_by = owned_by
        this.resources = resources
        this.buildings = buildings
        this.objective = objective
        this.actions = actions
        
    }
}