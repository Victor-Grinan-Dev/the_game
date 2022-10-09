
 export class ArmyList {// all the models in the map from the same player.
      point_cost = 0
      color='grey'
      faction = null //this is an object with own properties, including faction color.
  
      constructor(name="", composition=""){
          this.name = name
          this.composition = composition //an array of all formations-objects.
          this.setPointCost()
      }
  
      setColor(color){
        this.composition.forEach(formation=> formation.color = color)
        this.color=color
      }
  
      setPointCost(){
        if (this.composition){
          this.composition.forEach(formation => this.point_cost += formation.pointCost)
        }
        
      }
  }