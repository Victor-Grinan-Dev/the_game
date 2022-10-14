
export class Game {
   
    constructor(campaign){
        this.campaign = campaign
        this.map = this.campaign.map.map
    }

    render(){
        this.setVision();
    }

    setVision(){
        for(let row of this.map){
            for(let tile of row){
                if (tile.formation){
                    console.log(tile)
                    tile.status = "onSight";
                    tile.isExplored = true;
                    //console.log(tile.formation.vision)
                }
            }
        }
    }
}