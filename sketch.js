 const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 
 
 
 var engine , world, object , option , ground , groundOptions , ball , ballOptions;


function setup() { 
  createCanvas(400,400); 
  engine = Engine.create ();
   world = engine.world; 
   option = { 
     isStatic : true 
    } 
   object = Bodies.rectangle (100,100,50 ,50);
   groundOptions = {
     isStatic : true
   } 
   ground = Bodies.rectangle (200,370,400,20,groundOptions);
   
   World.add(world , object); 
   World.add( world , ground);
   ballOptions = {
     restitution : 1.0
   }
   ball = Bodies.circle (300,100,40,ballOptions);
   World.add( world , ball);
   console.log (object); 
   console.log(object.position.x); 
   console.log(object.position.y); 
  }


function draw() { 
  background(0,0,128); 
  Engine.update(engine); 
  rectMode(CENTER); 
  rect(object.position.x ,object.position.y,50,50); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}