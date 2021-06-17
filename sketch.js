var runnerImg;
var runner;

var roadImg,invisibleRoad,invisibleRoad1; 
var road;

function preload() {
   roadImage = loadImage("path.png")
   runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  }
function setup() {
  
  createCanvas(320,400);

  road = createSprite(160,200);
  road.addImage("r",roadImage);
   
  runner = createSprite(100,160);
  runner.addAnimation("ra", runnerImg);
  
  invisibleRoad = createSprite(320,200,10,400);
  invisibleRoad.visible = false;
  invisibleRoad1 = createSprite(0,200,10,400);
  invisibleRoad1.visible = false;
}
function draw() {
  background(220);
  road.velocityY = 4;
  road.scale = 1.2;
  console.log(road.Y)
   
  runner.scale = 0.05;
  runner.y = 300;
  console.log(runner.y)
  
  if (road.y > 400) {
    road.y = height / 2;
  }
  if(keyDown("right") && runner.x > 40 ){
     runner.velocityX = 4;
  }
  
   if(keyDown("left") && runner.x > -40 ){
    runner.velocityX = -4;
 }
    runner.velocityX = runner.velocityX + 0.5;

    runner.collide(invisibleRoad);
   
    runner.collide(invisibleRoad1);


   drawSprites();
}
