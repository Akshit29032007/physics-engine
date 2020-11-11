
class Box{
    constructor(x,y,width,height){
     var   Option={
         restitution : 0.8 ,
         friction:1.0 ,
         density:1.0
     }

     this.body=Bodies.rectangle(x,y,width,height,Option)
     this.W=width
     this.H=height

     World.add(world,this.body)

     

    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rectMode(CENTER)
        fill ("blue");
        strokeWeight(4)
        stroke("green")

        rect(0,0,this.W,this.H)
        pop ()
  

    }
}














