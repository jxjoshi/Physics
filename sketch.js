const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var ground_options={
  isStatic: true
}

  ground = Bodies.rectangle(200,100,50,50);
  World.add(world.ground);
  console.log(ground);
  console.log(ground,type);
  console.log(ground.position.x);
  console.log(ground.poistion.y);

  var ball_options={
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,50);
  World.add(world.ball);
  console.log(ball);
  console.log(ball,type);
  console.log(ball.position.x);
  console.log(ball.poistion.y);
}
function draw() {
  background("red");
  
  rectMode(CENTER);
  rect(ground.position.x , ground.postion.y, 50 , 50);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x , ball.postion.y, 50 , 50);
  
  drawSprites();
}