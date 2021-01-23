
var backgroundImg,backgroundImage;
var groundbase;
var box1;
var box2;
var box3;
var stone1;
var stone2;
var stone3;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var sand6;


const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//-----------------------------------------------------------------------------------------
function preload()
{
	backgroundImg=loadImage("background.jpg");
}
//-----------------------------------------------------------------------------------------
function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	//here is the ground for stabliying 
	 groundbase=Bodies.rectangle(width/2,height,width,20,{isStatic:true})
	 World.add(world,groundbase);

	 
	 //here we add engine 
	 Engine.run(engine);
	 
	 //Here we can add groups okay
     box1=new Box(500,500,50,50)
     box2=new Box(600,500,50,50)
	 box3=new Hammer(mouseX,mouseY,100,20,{density:2})
	 stone1=new Stone(200,500,20)
	 stone2=new Stone(260,500,20)
	 stone3=new Stone(320,500,20)
	 sand1=new Sand(650,587,1)
	 sand2=new Sand(670,587,1)
	 sand3=new Sand(690,587,1)
	 sand4=new Sand(710,587,1)
	 sand5=new Sand(730,587,1)
	 sand6=new Sand(750,587,1)
}

//----------------------------------------------------------------------------------------
function draw() {
var pos=groundbase.position;

//giving background Image;
  background(backgroundImg);
  rectMode(CENTER)


//this is for ground; here we use push & pop like start & pause;
  push();
  fill("black");
  rect(pos.x,pos.y,width,20);
  pop();

  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  stone1.display();
  stone2.display();
  stone3.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  
//this is for viewing X,Y;
  fill("white")
  textSize(20)
  text(mouseX+"-"+mouseY,mouseX,mouseY)
}



