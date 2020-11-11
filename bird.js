
class Bird{
    constructor(x,y){
     var   Option={
         restitution : 0.8 ,
         friction:1.0 ,
         density:1.0
     }

     this.body=Bodies.rectangle(x,y,50,50,Option)
     this.W=50
     this.H=50

     World.add(world,this.body)



     

    }

    display(){

        this.body.position.x=mouseX
        this.body.position.y=mouseY
     


        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rectMode(CENTER)
        fill ("red");
        strokeWeight(4)
        stroke("green")

        rect(0,0,this.W,this.H)
        pop ()
  

    }
}














