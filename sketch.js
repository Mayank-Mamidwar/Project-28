const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, boyImg;
var mangoObject1, mangoObject2,mangoObject3,mangoObject4,mangoObject5;


var ground;

function preload() {
//	boyImg = loadImage("images/boy.png");


}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(100, 700, 2500, 180);
	tree = new Tree(950, 420, 500, 500);
	mangoObject1 = new Mango(900,300,50,50);
	mangoObject2 = new Mango(800,400,50,50);
	mangoObject3 = new Mango(1000,350,50,50);
	mangoObject4 = new Mango(890,400,50,50);
	mangoObject5 = new Mango(1100,300,50,50);

	imageMode(CENTER);
//	boyImg = image(this.image, 200, 200, 20, 20);
//	World.add(world, boyImg);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	tree.display();
	mangoObject1.display();
	mangoObject2.display();
	mangoObject3.display();
	mangoObject4.display();
	mangoObject5.display();
//	boy.display();

	drawSprites();

}



