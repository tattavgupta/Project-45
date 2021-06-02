
var charlie , lion_running , gorilla_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
var survivalTime=0
var sheru
function preload(){
  
  
  lion_running =loadAnimation("L1.png","L2.png","L3.png","L4.png","L5.png","L6.png","L7.png","L8.png","L9.png","L10.png","L11.png","L12.png")
  
  gorilla_running =loadAnimation("G1.png","G2.png","G3.png","G4.png","G5.png","G6.png","G7.png","G8.png","G9.png","G10.png","G11.png","G12.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bg_1=loadImage("bg-1.jpg") 
}



function setup() {
  createCanvas(windowWidth,500);

  amazon=createSprite(windowWidth,550,0,0)
  amazon.addImage(bg_1)
  amazon.scale=1.4

  ground=createSprite(400,485,1000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  sheru=createSprite(80,415,20,20);
  sheru.addAnimation("moving",lion_running);
  sheru.scale=0.7;
  sheru.mirrorX(-1)
  
  charlie=createSprite(90,415,20,20);
  charlie.addAnimation("moving(1)",gorilla_running);
  charlie.scale=0.9;

  FoodGroup=createGroup()
  obstacleGroup=createGroup()
}


function draw() {
  background(0000,0000,0000);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyWentDown("space")&&charlie.y>170){
    charlie.velocityY=-15;
  }
  charlie.velocityY=charlie.velocityY+0.8;
  charlie.collide(ground);
  food()
  stone()
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  drawSprites()
}

function food() {
  if(frameCount%80==0){
   banana=createSprite(500,500,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage("eat",bananaImage);
   banana.velocityX=-4;
   banana.lifetime=125;
   banana.scale=0.07;
   FoodGroup.add(banana);
  }
}

function stone(){
   if(frameCount%300==0){
    obstacle=createSprite(500,415,20,20);
    obstacle.addImage("death",obstacleImage);
    obstacle.velocityX=-4;
    obstacle.lifetime=140;
    obstacle.scale=0.2;
    obstacleGroup.add(obstacle);
  }
}


