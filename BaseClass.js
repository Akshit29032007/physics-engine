
class BaseClass{
    constructor(x,y,w,h){
     var   Option={
         restitution : 0.8 ,
         friction:1.0 ,
         density:1.0
     }

     this.body=Bodies.rectangle(x,y,w,h,Option)

     this.w=w;
     this.h=h;
     this.image = loadImage('sprites/base.png');
     World.add(world,this.body)

     

    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop ()
  

    }
}














