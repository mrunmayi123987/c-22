const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world ;
var object;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;

 object = Bodies.rectangle(150,150,20,20);
 World.add(world,object);

 var ground_options={
   isStatic:true
 }

 ground = Bodies.rectangle(200,370,400,20,ground_options);
 World.add(world,ground);

var ball_options={

  restitution:2.5
}

 ball = Bodies.circle(300,300,20,ball_options);
 World.add(world,ball);

 
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  rectMode(CENTER);
  //rect(200,200,50,50);
 rect(object.position.x,object.position.y,20,20);
 rect(ground.position.x,ground.position.y,400,20);
 circle(ball.position.x,ball.position.y,20);


  //drawSprites();
}