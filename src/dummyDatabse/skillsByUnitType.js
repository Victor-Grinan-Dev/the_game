export const skills_by_unit_type = {//TODO?: smarter change all this to separate tags?
    infantry:{
      type:"infantry",
      image: "/public/assets/unit_infantry.png",
      movement:2,
      active:["build", "set_defence", "get_ready"],
      negative:[],
      passive:["claim_tile", "all_terrain", "work_force%+20"]
    },
    light_infantry:{
      type:"light_infantry",
      image: "/public/assets/unit_infantry.png",
      movement:2,
      active:["conceal", "get_ready", "claim_tile"],
      negative:["defense-10", "damage-10"],
      passive:["hold_position", "all_terrain", "movement+1" ]
    },
    heavy_armoured_infantry:{
      type:"heavy_armoured_infantry",
      image: "/public/assets/unit_heavy_infantry.png",
      movement:1,
      active:[ "set_defence", "get_ready", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "defense+5"]
    },
    heavy_weapons_infantry:{
      type:"heavy_weapons_infantry",
      image: "/public/assets/unit_heavy_infantry.png",
      movement:1,
      active:[ "set_defence", "get_ready", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "damage+5"]
    },
    jet_infantry:{
      type:"jet_infantry",
      image: "/public/assets/unit_transport_copter.png",
      movement:4,
      active:["deep_assault", "jump"],
      negative:["No_water", "recharge_jets"],
      passive:["fly"]
    },
    rider:{
      type:"rider",
      movement:5,
      image: "/public/assets/unit_recon.png",
      active:["hit&run"],
      negative:["No_water", "no_Mountain", "hard_in_swamps" ],
      passive:["turbo_boost"]
    },
    beast_rider:{
      type:"beast_rider",
      image: "/public/assets/unit_recon.png",
      movement:3,
      active:["hit&run", "turbo_boost"],
      negative:["No_water"],
      passive:["vision+1"]
    },
  
    transport_tank:{
      type:"transport_tank",
      image: "/public/assets/unit_apc.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+10"]
    },
  
    transport_armoured_tank:{
      type:"transport_heavy_weapon_tank",
      image: "/public/assets/unit_ligth_tank.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+6"]
    },
  
    light_tank:{
      type:"light_tank",
      image: "/public/assets/unit_ligth_tank.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain", "low_defence" ],
      passive:[]
    },
  
    tank:{
      type:"heavy_tank",
      image: "/public/assets/unit_mid_tank.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+5", "damage+5"]
    },
  
    heavy_tank:{
      type:"heavy_tank",
      image: "/public/assets/unit_big_tank.png",
      movement:3,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+10", "damage+10"]
    },
  
    fast_hover_transport:{
      type:"fast_hover_transport",
      image: "/public/assets/unit_transport_copter.png",
      movement:6,
      active:null,
      negative:["low_defence"],
      passive:["fly", "transport+5"]
    },
  
    fast_fover:{
      type:"fast_fover",
      image: "/public/assets/unit_copter.png",
      movement:6,
      active:null,
      negative:[ "low_defence"],
      passive:["fly"]
    },
  
    walker_wehicle:{
      type:"walker_wehicle",
      image: "/public/assets/unit_heavy_hover_tank.png",
      movement:2,
      active:null,
      negative:["no_water", "no_swamp"],
      passive:[]
    },
  
    artillery_tank:{
      type:"artillery_tank",
      image: "/public/assets/unit_rockets.png",
      movement:4,
      active:['deploy', "barage"],
      negative:["no_water"],
      passive:[]
    },
  
    artillery_battery:{
      type:"artillery_battery",
      image: "/public/assets/unit_artillery.png",
      movement:1,
      active:['deploy', "barage"],
      negative:["no_water"],
      passive:[]
    },
  
    warsuit:{
      type:"warsuit",
      image: "/public/assets/unit_heavy_hover_tank.png",
      movement:3,
      active:[],
      negative:["no_water"],
      passive:[]
    },
  
    monster:{
      type:"monster",
      image: "/public/assets/unit_heavy_hover_tank.png",
      movement:3,
      active:[],
      negative:[],
      passive:[]
    },
    beast:{ 
      type:"beast",
      image: "/public/assets/unit_recon.png",
      movement:3,
      active:[],
      negative:[],
      passive:["vision+1"]
    },
  
    flying_beast:{
      type:"flying_beast",
      image: "/public/assets/unit_copter.png",
      movement:6,
      active:[],
      negative:[],
      passive:["vision+2"]
    },
  };