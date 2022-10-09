import { terrainTypes } from "./terrainTypes"

export const hexTestMap = {
    name:"Devil's Arena",
    shape:"hx",
    dimensions: "4x4x4",
    map:[
            [
                {id:100,terrain:null},
                {id:110,terrain:null},
                {id:"a01", terrain: terrainTypes["plains"]},
                {id:"b01", terrain: terrainTypes["plains"]},
                {id:"c01", terrain: terrainTypes["plains"]},
                {id:"d01", terrain: terrainTypes["plains"]}
            ],
            [
                {id:140,terrain:null},
                {id:"a02", terrain: terrainTypes["plains"]}, 
                {id:"b02", terrain: terrainTypes["plains"]}, 
                {id:"c02", terrain: terrainTypes["plains"]}, 
                {id:"d02", terrain: terrainTypes["plains"]}, 
                {id:"e02", terrain: terrainTypes["plains"]}
            ], 
            [
                {id:200,terrain:null},
                {id:"a03", terrain: terrainTypes["plains"]},
                {id:"b03", terrain: terrainTypes["plains"]},
                {id:"c03", terrain: terrainTypes["plains"]},
                {id:"d03", terrain: terrainTypes["plains"]},
                {id:"e03", terrain: terrainTypes["plains"]},
                {id:"f03", terrain: terrainTypes["plains"]},
            ],

            [
                {id:"a04", terrain: terrainTypes["plains"]}, 
                {id:"b04", terrain: terrainTypes["plains"]}, 
                {id:"c04", terrain: terrainTypes["plains"]}, 
                {id:"d04", terrain: terrainTypes["plains"]}, 
                {id:"e04", terrain: terrainTypes["plains"]}, 
                {id:"f04", terrain: terrainTypes["plains"]}, 
                {id:"g04", terrain: terrainTypes["plains"]}
            ],
            [
                {id:230,terrain:null}, 
                {id:"b05", terrain: terrainTypes["plains"]}, 
                {id:"c05", terrain: terrainTypes["plains"]}, 
                {id:"d05", terrain: terrainTypes["plains"]}, 
                {id:"e05", terrain: terrainTypes["plains"]}, 
                {id:"f05", terrain: terrainTypes["plains"]}, 
                {id:"g05", terrain: terrainTypes["plains"]}, 
            ], 
            [
                {id:240,terrain:null}, 
                {id:"c06", terrain: terrainTypes["plains"]}, 
                {id:"d06", terrain: terrainTypes["plains"]}, 
                {id:"e06", terrain: terrainTypes["plains"]}, 
                {id:"f06", terrain: terrainTypes["plains"]}, 
                {id:"g06", terrain: terrainTypes["plains"]}, 

            ],
            [
                {id:280,terrain:null},
                {id:290,terrain:null},
                {id:"d07", terrain: terrainTypes["plains"]},
                {id:"e07", terrain: terrainTypes["plains"]}, 
                {id:"f07", terrain: terrainTypes["plains"]}, 
                {id:"g07", terrain: terrainTypes["plains"]}
            ] 
        ],
    maxPlayers: 2
    }