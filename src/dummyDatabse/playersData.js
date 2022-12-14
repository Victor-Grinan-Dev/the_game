import { User } from "../classes/user";
import { Unit } from "../classes/unit";
import { skills_by_unit_type } from "./skillsByUnitType";
import { Formation } from "../classes/formation";
import { ArmyList } from "../classes/army";

//wolf units:
const wolf_priest = new Unit(0, "Wolf Priest", 1, 80, skills_by_unit_type['infantry']);

const rune_priest = new Unit(1, "Rune Priest", 1, 115, skills_by_unit_type['jet_infantry']);

const alfa_hunters = new Unit(2, "Alfa Hunters", 5, 90, skills_by_unit_type['infantry']);

const bravo_hunters = new Unit(3, "Bravo Hunters", 5, 90, skills_by_unit_type['infantry']);

const blood_claws = new Unit(4, "Blood Claws", 5, 90, skills_by_unit_type['infantry']);

const sky_claws = new Unit(5, "Sky Claws", 10, 190, skills_by_unit_type['jet_infantry']);

//const snoop_dog = new Unit(6, "Snoopy", 1, 15, skills_by_unit_type['beast']);

const wolf_cavalry = new Unit(7, "Wolf Cavalry", 3, 165, skills_by_unit_type['beast_rider']);

const rhino = new Unit(8, "Rhino", 1, 80, skills_by_unit_type['transport_tank']);

const razor = new Unit(8, "Razorback", 1, 100, skills_by_unit_type['transport_armoured_tank']);

const long_fangs = new Unit(9, "Long Fangs", 5, 140, skills_by_unit_type['heavy_weapons_infantry']);

const lass_raz = new Unit(10, "Las-Raz", 1, 110, skills_by_unit_type['transport_armoured_tank']);

const captain = new Unit(11, "Captain", 1, 85, skills_by_unit_type['infantry']);

const whirlwind = new Unit(12, "Whirlwind vengance", 1, 135, skills_by_unit_type['artillery_tank'])

const thunder_cannon = new Unit(12, "Thunder Fire Cannon", 2, 120, skills_by_unit_type['artillery_battery']);

//formations:
const defenders = new Formation('defender', [alfa_hunters, bravo_hunters, rhino], "build & hold");
defenders.color = "#818aa2";

const patrol = new Formation('Blood Patrol', [wolf_priest, blood_claws, razor], "patrol & support");
patrol.color = "#818aa2";

const howlers = new Formation('Howlers', [rune_priest, sky_claws], "quick assault & tank hunt");
howlers.color = "#818aa2";

const riders = new Formation('Wolf Riders', [wolf_cavalry], "quick assault & tank hunt");
riders.color = "#818aa2";

//const snoopy = new Formation('Snoopy', [snoop_dog], "scout");

//snoopy.color = "#818aa2";
const lf_fire_support = new Formation("Long Fangs", [captain, long_fangs, lass_raz],'fire support & defend objectives');

lf_fire_support.color="#818aa2";
const fire_rain = new Formation("Fire Rain", [whirlwind, thunder_cannon], "long fire support & siege");
fire_rain.color = "#818aa2";

//wolf Army:
const wolf_army = new ArmyList('Wolf Raiders', [defenders, patrol, howlers, riders])

const user1 = new User("Victor", "Victor123");

user1.army_lists = wolf_army;
user1.army_lists.color = '#818aa2';
user1.formations.push(lf_fire_support);
user1.formations.push(fire_rain);

//lion units:
const chappy = new Unit(0, "Chaplain", 1, 85, skills_by_unit_type['infantry']);
const bikeApothecary = new Unit(1, "Apothecary", 1, 100, skills_by_unit_type['rider']);
const IconOfCaliban = new Unit(2, "The Icon Of Caliban", 1, 100, skills_by_unit_type['fast_hover']);

const alfaTacticals = new Unit(3, "Alfa Tacticals", 5, 90, skills_by_unit_type['infantry']);
const bravoTacticals = new Unit(4, "Bravo Tacticals", 5, 90, skills_by_unit_type['infantry']);

const knigths = new Unit(5, "Knigths", 5, 175, skills_by_unit_type['rider']);
const alfaBikers = new Unit(6, "Alfa Bikers", 3, 120, skills_by_unit_type['rider']);
const bravoBikers = new Unit(7, "Bravo Bikers", 3, 120, skills_by_unit_type['rider']);

const alfaSpeeder = new Unit(8, "Alfa Speeder", 1, 110, skills_by_unit_type['fast_hover']);
const bravoSpeeder = new Unit(9, "Bravo Speeder", 1, 110, skills_by_unit_type['fast_hover']);

const dready = new Unit(10, "Dreadnought", 1, 145, skills_by_unit_type['walker_wehicle']);
const termies = new Unit(11, "Termies", 1, 200, skills_by_unit_type['walker_wehicle']);

//lion formations
const hq = new Formation("HQ", [chappy, alfaTacticals, bravoTacticals], "building army");
hq.color= "#ece9b0"
const hoverPatrol = new Formation ("Hover Patrol", [IconOfCaliban, alfaSpeeder, bravoSpeeder], 
"spot and harrass");
hoverPatrol.color="#ece9b0"
const ravenWing = new Formation("Raven Wing", [bikeApothecary, knigths, alfaBikers, 
    bravoBikers]);
ravenWing.color="#ece9b0"
const deathwing = new Formation("Deathwing", [termies, dready]);
deathwing.color="#ece9b0"

//lion user
const lion_army = new ArmyList('lion kings', [hq, hoverPatrol, ravenWing]);

const user2 = new User("Qwerty123", "Qwerty123");

user2.army_lists = lion_army;
user1.army_lists.color = '#23525b';
user2.formations.push(deathwing);

export const wolfPlayer = user1;
export const lionPlayer = user2;