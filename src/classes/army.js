
 export class ArmyList {// all the models in the map from the same player.
      point_cost = 0
      color=null
      faction = null //this is an object with own properties, including faction color.
  
      constructor(name="", composition=""){
          this.name = name
          this.composition = composition //an array of all formations-objects.
          this.setPointCost()
      }
  
      setPointCost(){
        if (this.composition.length > 0){
          this.composition.forEach(formation => {
            this.point_cost += formation.point_const
          })
        }
      }
  }