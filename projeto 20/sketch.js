const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var dwayneJohnson;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();//criando o motor de física
  world = engine.world;//adicionando um mundo au motor!!!!!!

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var dwayneJhonson_options = {
    restitution : 1
  }

  dwayneJohnson = Bodies.circle(200,20,50, dwayneJhonson_options);
  World.add(world,dwayneJohnson);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 ellipse(dwayneJohnson.position.x,dwayneJohnson.position.y,50);
}

