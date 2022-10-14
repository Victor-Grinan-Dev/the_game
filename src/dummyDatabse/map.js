import { Map } from "../classes/map";
import { Tile } from "../classes/Tile";
import { terrainTypes } from "./terrainTypes";


    const mapNestedArray = [
        [[100],["a01", "hills"],["b01", "plains"],["c01", "plains"],["d01", "hills"],],
        [[200],["a02", "plains"],["b02", "plains"],["c02", "plains"],["d02", "plains"],["e02", "plains"],],
        [["a03", "plains"],["b03", "plains"],["c03", "forest"],["d03", "forest"],["e03", "plains"],["f03", "plains"],],
        [["a04", "hills"],["b04", "plains"],["c04", "forest"],["d04", "mountains"],["e04", "forest"],["f04", "plains"],["g04", "hills"],],
        [["b05", "plains"],["c05", "plains"],["d05", "forest"],["e05", "forest"],["f05", "plains"],["g05", "plains"],],
        [[600],["c06", "plains"],["d06", "plains"],["e06", "plains"],["f06", "plains"],["g06", "plains"],],
        [[700],["d07", "hills"],["e07", "plains"],["f07", "plains"],["g07", "hills"],],

    ];

    const map = [
        [
            new Tile(100, 0, 0,),
            new Tile("a01", 0, 1,  terrainTypes["hills"]),
            new Tile("b01", 0, 2,  terrainTypes["plains"]),
            new Tile("c01", 0, 3,  terrainTypes["plains"]),
            new Tile("d01", 0, 4, terrainTypes["hills"])
        ],
        [
            new Tile(200, 1,0),
            new Tile("a02", 1, 1, terrainTypes["plains"]),
            new Tile("b02", 1, 2, terrainTypes["plains"]),
            new Tile("c02", 1, 3, terrainTypes["plains"]),
            new Tile("d02", 1, 4, terrainTypes["plains"]),
            new Tile("e02", 1, 5, terrainTypes["plains"])
        ], 
        [ 
            new Tile("a03", 2, 0, terrainTypes["plains"]),
            new Tile("b03", 2, 1, terrainTypes["plains"]),
            new Tile("c03", 2, 2, terrainTypes["forest"]),
            new Tile("d03", 2, 3, terrainTypes["forest"]),
            new Tile("e03", 2, 4, terrainTypes["plains"]),
            new Tile("f03", 2, 5, terrainTypes["plains"]),
        ],

        [
            new Tile("a04", 3, 0, terrainTypes["hills"]), 
            new Tile("b04", 3, 1, terrainTypes["plains"]), 
            new Tile("c04", 3, 2, terrainTypes["forest"]), 
            new Tile("d04", 3, 3, terrainTypes["mountains"]), 
            new Tile("e04", 3, 4, terrainTypes["forest"]), 
            new Tile("f04", 3, 5, terrainTypes["plains"]), 
            new Tile("g04", 3, 6, terrainTypes["hills"])
        ],
        [  
            new Tile("b05", 4, 0, terrainTypes["plains"]), 
            new Tile("c05", 4, 1, terrainTypes["plains"]), 
            new Tile("d05", 4, 2, terrainTypes["forest"]), 
            new Tile("e05", 4, 3, terrainTypes["forest"]), 
            new Tile("f05", 4, 4, terrainTypes["plains"]), 
            new Tile("g05", 4, 5, terrainTypes["plains"]), 
        ], 
        [ 
            new Tile(600, 5, 0),
            new Tile("c06", 5, 1, terrainTypes["plains"]), 
            new Tile("d06", 5, 2, terrainTypes["plains"]), 
            new Tile("e06", 5, 3, terrainTypes["plains"]), 
            new Tile("f06", 5, 4, terrainTypes["plains"]), 
            new Tile("g06", 5, 5, terrainTypes["plains"]), 
        ],
        [
            new Tile(700, 6, 0),
            new Tile("d07", 6, 1, terrainTypes["hills"]),
            new Tile("e07", 6, 2, terrainTypes["plains"]), 
            new Tile("f07", 6, 3, terrainTypes["plains"]), 
            new Tile("g07", 6, 4, terrainTypes["hills"])
        ] 
    ]
    export const hexTestMap = new Map("Devil's Arena", "hx", "4x4x4", map)

