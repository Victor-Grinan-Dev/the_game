- player can only move/command his own tokens/formations

# MVP

//TODOS mvp:
/\***\* move \*\***/

//tokens can only move up to its maximun movement.
//- save in redux each formation
//- update in each move formation stats
//- logic (if formation.movLeft > 0 => move)

//if token run out of movement become inactive (hasBeen= true).

//if token become adjacent with hostile token first token become inactive.

//tokens movement is reduced by tile movement requirement. (terrain)

//if token doesnt reach movement requirement for tile/( terrain) token cant acces that tile. no move option there.

//if token has no move option token is exhasted. isBeen=true

/\***\* turn managment \*\***/
//create button nextTurn => all tokens freezes and commands are saved to compara with other players commands.
//create button reset to cancel all actions commanded and start again.
//create action cancel to reset only one token action.
//once a player units hasBeen save commands to commandsDatabase(in time order)

/\***\* info \*\***/
//create info panel (top)
//if player clicks his token can see formation info and/or tile info.
//if player clicks hostile token can see formation info and/or tile info.

/\***\* sight & tilestatus \*\***/
//tiles status is outOfSight if no own token has line of sight with it.

//hills give plus 1 sight.?!?!?!?!?!

/\***\* commands \*\***/
//create command panel (bottom)
//move all commands to command panel on token clikc

//TODO mvp lvl2:
//auto battle system.

//TODO levl3:
//if token moves can't do other actions but move until max movement reach or stay.

//other action than move. (general for all)
//stay  
//search
//build
//heal
//setDefence
//getReady/overwatch

/\***\* special actions \*\*\***/
//charge
//jump
//siege
//turbo-bust
//sabotage
//booby-Trap
//hide & ambush
