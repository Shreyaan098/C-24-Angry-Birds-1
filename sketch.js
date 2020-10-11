const Engine =Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies

var engine, world;
var ground;
var box1,box2,box3,box4,box5,ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(400,200,70,70);
  box2= new  Box(600,200,70,70);
  ground= new Ground(400,370,800,20)
  pig1= new Pig(500,200)
  log1=new Log(500,150,300,PI/2)

  box3= new Box(400,100,70,70);
  box4= new  Box(600,100,70,70);
  pig2= new Pig(500,100)
  log2=new Log(500,50,300,PI/2)

  box5= new Box(500,10,70,70)
  log3= new Log(450,10,150,PI/7)
  log4= new Log(550,10,150,-PI/7)
  bird= new Bird(50,50)
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
 }