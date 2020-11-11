
class Log{
    constructor(x,y,height,angle) {
     var   Option={
         restitution : 1.0 ,
         friction:1.0 ,
         density:1.0
     }

     this.body=Bodies.rectangle(x,y,20,height,Option)
     Matter.Body.setAngle(this.body,angle)
     this.W=20
     this.H=height

     World.add(world,this.body)

     

    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.W,this.H)
        pop ()


    }
}

























































