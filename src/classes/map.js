
export class Map {
    maxPlayers = 2
    constructor(name, shape, dimensions, map){
    this.name = name
    this.shape = shape
    this.dimensions = dimensions
    this.map = map// array of MapLines/bidimentional array
    }
}