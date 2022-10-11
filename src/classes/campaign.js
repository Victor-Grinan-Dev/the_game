export class Campaign {
    isStarted = false
    isEnded = false
    rules = []
    players = []

    constructor(campaignId, name, armySize, map, availableFactions, rounds=4, timeLapse="weeks") {
        this.campaignId = campaignId
        this.name = name
        this.armySize = armySize
        this.map = map
        this.availableFactions = availableFactions
        if (rounds < 4){
            rounds = 4
        }else{
            this.rounds = rounds
        }

        this.timeLapse=timeLapse
    }
}