import { Map } from "../classes/map"
import { Tile } from "../classes/Tile"
import { terrainTypes } from "./terrainTypes"

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
            new Tile(100),
            new Tile("a01",  terrainTypes["hills"]),
            new Tile("b01",  terrainTypes["plains"]),
            new Tile("c01",  terrainTypes["plains"]),
            new Tile("d01",  terrainTypes["hills"])
        ],
        [
            new Tile(200),
            new Tile("a02", terrainTypes["plains"]),
            new Tile("b02", terrainTypes["plains"]),
            new Tile("c02", terrainTypes["plains"]),
            new Tile("d02", terrainTypes["plains"]),
            new Tile("e02", terrainTypes["plains"])
        ], 
        [ 
            new Tile("a03", terrainTypes["plains"]),
            new Tile("b03", terrainTypes["plains"]),
            new Tile("c03", terrainTypes["forest"]),
            new Tile("d03", terrainTypes["forest"]),
            new Tile("e03", terrainTypes["plains"]),
            new Tile("f03", terrainTypes["plains"]),
        ],

        [
            new Tile("a04", terrainTypes["hills"]), 
            new Tile("b04", terrainTypes["plains"]), 
            new Tile("c04", terrainTypes["forest"]), 
            new Tile("d04", terrainTypes["mountains"]), 
            new Tile("e04", terrainTypes["forest"]), 
            new Tile("f04", terrainTypes["plains"]), 
            new Tile("g04", terrainTypes["hills"])
        ],
        [  
            new Tile("b05", terrainTypes["plains"]), 
            new Tile("c05", terrainTypes["plains"]), 
            new Tile("d05", terrainTypes["forest"]), 
            new Tile("e05", terrainTypes["forest"]), 
            new Tile("f05", terrainTypes["plains"]), 
            new Tile("g05", terrainTypes["plains"]), 
        ], 
        [ 
            new Tile(600),
            new Tile("c06", terrainTypes["plains"]), 
            new Tile("d06", terrainTypes["plains"]), 
            new Tile("e06", terrainTypes["plains"]), 
            new Tile("f06", terrainTypes["plains"]), 
            new Tile("g06", terrainTypes["plains"]), 
        ],
        [
            new Tile(700),
            new Tile("d07", terrainTypes["hills"]),
            new Tile("e07", terrainTypes["plains"]), 
            new Tile("f07", terrainTypes["plains"]), 
            new Tile("g07", terrainTypes["hills"])
        ] 
    ]
    export const hexTestMap = new Map("Devil's Arena", "hx", "4x4x4", map)

