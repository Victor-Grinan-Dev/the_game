import { Map } from "../classes/map";
import { Tile } from "../classes/Tile";
import { terrainTypes } from "./terrainTypes";

/*
    const mapNestedArray = [
        [[100],["a01", "hills"],["b01", "plains"],["c01", "plains"],["d01", "hills"],],
        [[200],["a02", "plains"],["b02", "plains"],["c02", "plains"],["d02", "plains"],["e02", "plains"],],
        [["a03", "plains"],["b03", "plains"],["c03", "forest"],["d03", "forest"],["e03", "plains"],["f03", "plains"],],
        [["a04", "hills"],["b04", "plains"],["c04", "forest"],["d04", "mountains"],["e04", "forest"],["f04", "plains"],["g04", "hills"],],
        [["b05", "plains"],["c05", "plains"],["d05", "forest"],["e05", "forest"],["f05", "plains"],["g05", "plains"],],
        [[600],["c06", "plains"],["d06", "plains"],["e06", "plains"],["f06", "plains"],["g06", "plains"],],
        [[700],["d07", "hills"],["e07", "plains"],["f07", "plains"],["g07", "hills"],],

    ];
*/
export const shitty = [
    [
        new Tile(100, 0, 0,),
        new Tile("a00", 0, 1,  terrainTypes["hills"]),
    ],

    [
        new Tile(200, 1,0),
        new Tile("a01", 1, 1, terrainTypes["plains"]),
        new Tile("b01", 1, 2, terrainTypes["plains"])
    ], 
    
    [ 
        new Tile("a02", 2, 0, terrainTypes["plains"]),
        new Tile("b02", 2, 1, terrainTypes["plains"]),
        new Tile("c02", 2, 2, terrainTypes["forest"]),
    ],

    [
        new Tile("a03", 3, 0, terrainTypes["hills"]), 
        new Tile("b03", 3, 1, terrainTypes["plains"]), 
        new Tile("c03", 3, 2, terrainTypes["forest"]), 
    ],
    [  
        new Tile("b04", 4, 0, terrainTypes["plains"]), 
        new Tile("c04", 4, 1, terrainTypes["plains"]), 
    ], 
    [ 
        new Tile(600, 5, 0),
        new Tile("c05", 5, 1, terrainTypes["plains"]), 
 
    ],
]

    const map = [
        [
            new Tile(100, 0, 0,),
            new Tile("a00", 0, 1,  terrainTypes["city"]),
            new Tile("b00", 0, 2,  terrainTypes["plains"]),
            new Tile("c00", 0, 3,  terrainTypes["plains"]),
            new Tile("d00", 0, 4, terrainTypes["city"])
        ],
        [
            new Tile(200, 1,0),
            new Tile("a01", 1, 1, terrainTypes["plains"]),
            new Tile("b01", 1, 2, terrainTypes["swamp"]),
            new Tile("c01", 1, 3, terrainTypes["swamp"]),
            new Tile("d01", 1, 4, terrainTypes["swamp"]),
            new Tile("e01", 1, 5, terrainTypes["plains"])
        ], 
        [ 
            new Tile("a02", 2, 0, terrainTypes["plains"], "Wolf Raiders"),
            new Tile("b02", 2, 1, terrainTypes["plains"]),
            new Tile("c02", 2, 2, terrainTypes["forest"]),
            new Tile("d02", 2, 3, terrainTypes["forest"]),
            new Tile("e02", 2, 4, terrainTypes["plains"]),
            new Tile("f02", 2, 5, terrainTypes["plains"], "lion kings"),
        ],

        [
            new Tile("a03", 3, 0, terrainTypes["hills"], "Wolf Raiders"), 
            new Tile("b03", 3, 1, terrainTypes["plains"], "Wolf Raiders"), 
            new Tile("c03", 3, 2, terrainTypes["forest"]), 
            new Tile("d03", 3, 3, terrainTypes["mountains"]), 
            new Tile("e03", 3, 4, terrainTypes["forest"]), 
            new Tile("f03", 3, 5, terrainTypes["plains"], "lion kings"), 
            new Tile("g03", 3, 6, terrainTypes["hills"], "lion kings")
        ],
        [  
            new Tile("b04", 4, 0, terrainTypes["plains"], "Wolf Raiders"), 
            new Tile("c04", 4, 1, terrainTypes["plains"]), 
            new Tile("d04", 4, 2, terrainTypes["forest"]), 
            new Tile("e04", 4, 3, terrainTypes["forest"]), 
            new Tile("f04", 4, 4, terrainTypes["plains"]), 
            new Tile("g04", 4, 5, terrainTypes["plains"], "lion kings"), 
        ], 
        [ 
            new Tile(600, 5, 0),
            new Tile("c05", 5, 1, terrainTypes["plains"]), 
            new Tile("d05", 5, 2, terrainTypes["swamp"]), 
            new Tile("e05", 5, 3, terrainTypes["swamp"]), 
            new Tile("f05", 5, 4, terrainTypes["swamp"]), 
            new Tile("g05", 5, 5, terrainTypes["plains"]), 
        ],
        [
            new Tile(700, 6, 0),
            new Tile("d06", 6, 1, terrainTypes["city"]),
            new Tile("e06", 6, 2, terrainTypes["plains"]), 
            new Tile("f06", 6, 3, terrainTypes["plains"]), 
            new Tile("g06", 6, 4, terrainTypes["city"])
        ] 
    ]
    export const hexTestMap = new Map("Devil's Arena", "hx", "4x4x4", map)


