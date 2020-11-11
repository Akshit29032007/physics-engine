
class Ground{
 constructor(x,y,width,height){
    var  Ground1={
        isStatic : true 
    }
    this.body=Bodies.rectangle(x,y,width,height,Ground1)
    this.W=width
    this.H=height

    World.add(world,this.body)
 }
 display(){
  rectMode(CENTER)
  fill("brown") 
  rect(this.body.position.x,this.body.position.y,this.W,this.H)  
  
 }

}











