
//NameSpacing
const Engine = Matter.Engine; //Universe
const World = Matter.World; // World
const Bodies = Matter.Bodies; // Real world objects

var engine, ourWorld;

var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); // creating the universe
  ourWorld = engine.world;

  var options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200,100,50,50, options);
  World.add(ourWorld, ground);


  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  drawSprites();
}