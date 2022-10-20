
import { theBattleForTheChorizo } from "./campaignData";
//players
import { lionPlayer } from "./playersData";
import { wolfPlayer } from "./playersData";

//join players to the campaign
theBattleForTheChorizo.players.push(lionPlayer);
theBattleForTheChorizo.players.push(wolfPlayer);

//deploy units in map
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[0], 'a02')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[1], 'b03')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[2], 'a03')
theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[3], 'b04')
//theBattleForTheChorizo.map.placeFormation(wolfPlayer.army_lists.composition[4], 'c03')

theBattleForTheChorizo.map.placeFormation(lionPlayer.army_lists.composition[0], 'g04')
theBattleForTheChorizo.map.placeFormation(lionPlayer.army_lists.composition[1], 'e02')
theBattleForTheChorizo.map.placeFormation(lionPlayer.army_lists.composition[2], 'f03')

//initialize game
theBattleForTheChorizo.turn += 1;

export default theBattleForTheChorizo;

 