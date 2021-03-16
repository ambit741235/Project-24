
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var stone, rubber, hammer, plane, iron;
var sand1, sand2, sand3, sand4, sand5, sand6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(50,50);
	plane = new Plane(400,700,1200,50);
	rubber = new Rubber(700,500,30);
	stone = new Stone(100,500,100,100);
	

	sand1 = new Sand(500,500,5);
	sand2 = new Sand(200,500,5);
	sand3 = new Sand(300,500,5);
	sand4 = new Sand(400,500,5);
	sand5 = new Sand(600,500,5);
	sand6 = new Sand(400,500,5);

	iron = new Iron(450,500,150,90);

	//Engine.run(engine);
  
}


function draw() {
	background("lightblue");
	Engine.update(engine);

	hammer.display();
	plane.display();
	rubber.display();
	stone.display();
	

	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();

	iron.display();
}



