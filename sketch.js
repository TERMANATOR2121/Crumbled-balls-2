const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,groung2,ball,d1;
function preload()
{
    paperImg = loadImage("images/paper.png");
    binImg = loadImage("images/dustbingreen.png");
}

function setup() {
    createCanvas(1900, 900);
    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ball=new Ball (100,180,20);
	ground= new Ground(width/2,900,2000,100);
	ground2= new Ground2(1900,450,100,10000);
    d1=new Dustbin(1600,840,200,20);
    d2=new Dustbin(1700,700,20,300);
    d3=new Dustbin(1500,700,20,300);
    Engine.run(engine);
}


function draw() {
rectMode(CENTER);
background(0);
drawSprites();
ground.display();
ground2.display();
ball(paperImg)();
d1(binImg);
d2(binImg);
d3(binImg);
Engine.update(engine);
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-35})
	}
}
