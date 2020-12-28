var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftbox, middlebox, rightbox;
var leftboxbody, middleboxbody, rightboxbody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	leftbox = createSprite(290, 610, 20, 100);
	leftbox.shapeColor = color('red')

	middlebox = createSprite(width/2, 650, 200, 20);
	middlebox.shapeColor = color('red')
	
	rightbox = createSprite(510, 610, 20, 100);
	rightbox.shapeColor = color('red')


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	var options = {
		isStatic:true
	}

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , options );
	World.add(world, ground);


	leftboxbody = Bodies.rectangle(300, 610, 20, 100);
	World.add(world, leftboxbody);

	middleboxbody = Bodies.rectangle(width/2, 640, 200, 20 , options );
	World.add(world, middleboxbody);
	
	rightboxbody = Bodies.rectangle(500, 610, 20, 100 , options );
	World.add(world, rightboxbody);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y
  drawSprites();
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Body.setStatic(packageBody, false);
    }
}