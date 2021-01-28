
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,crumpledball;
var innerdustbin;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumpledball=new CrumpledBall(320,600,60,60);
	innerdustbin=new InnerDustbin(1200,500,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  crumpledball.display();
  groundObject.display();
  dustbinObj.display();
  innerdustbin.display();
  

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:220,y:-250})
	}
}

