
var trex ,trex_running;
var ground,groundImage,invisibleground;
function preload(){
 trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png");
groundimage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;

 ground=createSprite(200,180,400,20);
 ground.addImage("ground",groundimage);

 invisibleground=createSprite(200,190,400,20)
 invisibleground.visible=false;
}

function draw(){
  background("black")
  
if (keyDown("space"))
{
  trex.velocityY=-8;
}
trex.velocityY=trex.velocityY+1;

  trex.collide(invisibleground);
drawSprites();
}
