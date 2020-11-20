const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,d1,d2,d3;
var ball,DustbinImg,backrImg;
var d4;
var new1;

function preload(){
backrImg=loadImage("background.jpg")
DustbinImg=loadImage("  DUSTBIN2.png")


}



function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
  ground=new Ground(700,425,3030,30)
  
  d1=new Dustbin(1000,380,140,20)

  d2=new Dustbin(900,310,20,170)
 d3=new Dustbin(1100,310,20,170)
 d4=new Dustbin(1000,400,200,20)
ball=new Ball(200,100)

new1=new DG(1000,100,3030,5)
Engine.run(engine);
  


}


function draw() {
  rectMode(CENTER);
  background(backrImg);
fill("red")
stroke(10)
textSize(20)
  text("A swachh bharat Model making competition was organised",150,20)
  text("You as the mayor was invited as the chief guest",100,50)
  text("Check if the model is working properly and decide the winner accordingly!!",100,80)

 
 


ground.display();
ball.display();
  d1.display();
  image(DustbinImg,900,190,200,220)
  d2.display();
  d3.display();
  d4.display();
new1.display();

 keyPressed();

console.log(ball.body.position.x)
  
  




 drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW ){
Matter.Body.applyForce(ball.body,ball.body.position,{x:7,y:-9})

  }

}


