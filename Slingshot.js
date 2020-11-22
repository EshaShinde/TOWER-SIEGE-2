class SlingShot{
    constructor(bodyA, pointB)
    {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 1.3
      }
      this.visibility = 255;
      this.slingshot= Constraint.create(options);
      this.pointB=pointB;
      World.add(world,this.sling);


    }

    fly(){
        this.slingshot.bodyA = null;
    }

    attach(body){
      this.sling.bodyA = body; 
  }       

    display() {

      if(this.sling.bodyA){
      var pointA=this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      stroke("black");
      line(pointA.x,pointA.y,pointB.x,pointB.y);

      }
      
    }

} 