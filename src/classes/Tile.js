export class Tile {
    status = "unexplored";//disabled outSight     selected unexplored  onSight
    isExplored = false;
    constructor(
        id,
        
        posX,
        posY,

        terrain=null,
        formation = null,
        is_starting_position = false,
        objective = false,
        resources = [],
        building = [],
        actions = [],
        owned_by = undefined,
        ){
        this.id = id 

        this.posX = posX
        this.posY = posY

        this.terrain = terrain
        this.formation = formation
        this.is_starting_position = is_starting_position
        this.owned_by = owned_by
        this.resources = resources
        this.building = building
        this.objective = objective
        this.actions = actions
        if (this.formation){
            this.tile.status = "onSight"
            this.IsExplored = true
        }
    }
}