const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;
 var engine, world; 
 var ground, ball;



function setup() {
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world;

 var ground1={
   isStatic :  true

   } 
   ground=Bodies.rectangle(400,390,800,10,ground1)

   World.add(world,ground)
 
  var ball1={
    restitution : 1.5
  }
  
  ball=Bodies.circle(400,100,40,ball1)
  World.add(world,ball)

    
}

function draw() {
  background(0);

  Engine.update(engine)
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,10);

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,40,40);

 

  }