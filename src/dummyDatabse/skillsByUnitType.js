export const skills_by_unit_type = {//TODO?: smarter change all this to separate tags?
  anti_air:{
    type:"anti_air",
    image: "/assets/unit/anti_air.png",
    movement:4,
    active:[],
    negative:[],
    passive:[]
  },
  artillery_battery:{
    type:"artillery_battery",
    image: "/assets/unit/artillery.png",
    movement:1,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },
  artillery_tank:{
    type:"artillery_tank",
    image: "/assets/unit/artillery_tank.png",
    movement:4,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },

  artillery_truck:{
    type:"artillery_tank",
    image: "/assets/unit/artillery_truck.png",
    movement:4,
    active:['deploy', "barage"],
    negative:["no_water"],
    passive:[]
  },

  beast_rider:{
    type:"beast_rider",
    image: "/assets/unit/beast_rider.gif",
    movement:3,
    active:["hit&run", "turbo_boost"],
    negative:["No_water"],
    passive:["vision+1"]
  },

  beast:{ 
    type:"beast",
    image: "/assets/unit/beast.png",
    movement:3,
    active:[],
    negative:[],
    passive:["vision+1"]
  },

  infantry:{
      type:"infantry",
      image: "/assets/unit/infantry.png",
      movement:2,
      active:["build", "set_defence", "get_ready"],
      negative:[],
      passive:["claim_tile", "all_terrain", "work_force%+20"]
    },
    light_infantry:{
      type:"light_infantry",
      image: "/assets/unit/infantry.png",
      movement:2,
      active:["conceal", "get_ready", "claim_tile"],
      negative:["defense-10", "damage-10"],
      passive:["hold_position", "all_terrain", "movement+1" ]
    },
    heavy_armoured_infantry:{
      type:"heavy_armoured_infantry",
      image: "/assets/unit/heavy_infantry.png",
      movement:1,
      active:[ "set_defence", "get_ready", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "defense+5"]
    },
    heavy_weapons_infantry:{
      type:"heavy_weapons_infantry",
      image: "/assets/unit/heavy_infantry.png",
      movement:1,
      active:[ "set_defence", "get_ready", "claim_tile"],
      negative:[],
      passive:["hold_position", "all_terrain", "damage+5"]
    },
    jet_infantry:{
      type:"jet_infantry",
      image: "/assets/unit/transport_copter.png",
      movement:4,
      active:["deep_assault", "jump"],
      negative:["No_water", "recharge_jets"],
      passive:["fly"]
    },
    rider:{
      type:"rider",
      movement:5,
      image: "/assets/unit/recon.png",
      active:["hit&run"],
      negative:["No_water", "no_Mountain", "hard_in_swamps" ],
      passive:["turbo_boost"]
    },
    transport_tank:{
      type:"transport_tank",
      image: "/assets/unit/apc.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+10"]
    },
  
    transport_armoured_tank:{
      type:"transport_heavy_weapon_tank",
      image: "/assets/unit/ligth_tank.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain" ],
      passive:["transport+6"]
    },
  
    light_tank:{
      type:"light_tank",
      image: "/assets/unit/ligth_tank.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain", "low_defence" ],
      passive:[]
    },
  
    mid_tank:{
      type:"mid_tank",
      image: "/assets/unit/mid_tank.png",
      movement:4,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+5", "damage+5"]
    },
  
    heavy_tank:{
      type:"heavy_tank",
      image: "/assets/unit/big_tank.png",
      movement:3,
      active:null,
      negative:["No_water", "no_Mountain"],
      passive:["defense+10", "damage+10"]
    },
  
    hover_transport:{
      type:"hover_transport",
      image: "/assets/unit/transport_copter.png",
      movement:6,
      active:null,
      negative:["low_defence"],
      passive:["fly", "transport+5"]
    },
  
    fast_hover:{
      type:"fast_fover",
      image: "/assets/unit/hover_copter.png",
      movement:6,
      active:null,
      negative:[ "low_defence"],
      passive:["fly"]
    },
  
    walker_wehicle:{
      type:"walker_wehicle",
      image: "/assets/unit/walker_wehicle.png",
      movement:2,
      active:null,
      negative:["no_water", "no_swamp"],
      passive:[]
    },
  
    warsuit:{
      type:"warsuit",
      image: "/assets/unit/war_suit.gif",
      movement:3,
      active:[],
      negative:["no_water"],
      passive:[]
    },
  
    monster:{
      type:"monster",
      image: "/assets/unit/heavy_hover_tank.png",
      movement:3,
      active:[],
      negative:[],
      passive:[]
    },

    flying_beast:{
      type:"flying_beast",
      image: "/assets/unit/copter.png",
      movement:6,
      active:[],
      negative:[],
      passive:["vision+2"]
    },
  };