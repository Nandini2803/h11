var path,jake,bomb,coin,power;
var jakeImg,pathImg,bombImg,coinImg,powerImg;
function preload(){
  //pre-load images
 pathImg = loadImage("path.png");
 jakeImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
 coinImg = loadImage("coin.png");
 bombImg = loadImage("bomb.png");
 powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,600);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  //create sprites here
 
  jakeImg = createSprite(50,160,120,50);
  jakeImg.addAnimation("jakeImg",jakeImg);
  jakeImg.scale=0.08;

}

function draw() {
  if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges);

  if (path.y > 400){
    path.y = height/2;
  }

drawSprites();
}
}
