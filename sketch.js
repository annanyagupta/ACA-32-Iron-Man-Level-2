
var bg, backgroundImg;
var ironman;
var stoneGroup,stoneImage;

function preload() {
  bgImg = loadImage("images/bg.jpg");
 ironmanImg = loadImage("images/iron.png");
 stoneImage=loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg);
  bg.scale =2;
  bg.velocityY=10;
  ground = createSprite(200,585,1700,10);
 ground.visible = false;
 stoneGroup=new Group();

 ironman =createSprite(200,450,20,50);
ironman.addImage(ironmanImg);
ironman.scale=0.3;
}

function draw() {
  if(bg.y>500)
  bg.y=200;
  if(ironman.x<200){
    ironman.x=200;
  }

  if(ironman.y<50){
    ironman.y=50;
  }
  if(keyDown("up")){
  ironman.y -= 5;
  }
  
  if(keyDown("left")){
  ironman.x=ironman.x -5;
  }
  if(keyDown("right")){
  ironman.x=ironman.x +5;
  }
  if(keyDown("down")){
    ironman.y=ironman.y +5;
    }
  //ironman.velocityY=ironman.velocityY +0.5;
  
  generateStones();
  for(var i = 0 ; i< (stoneGroup).length ;i++){
    var temp = (stoneGroup).get(i) ;
  
  if (ironman.isTouching(temp)) {
  ironman.collide(temp);
  //temp.destroy();
  }}
  ironman.collide(ground);

    drawSprites();
   
}
function generateStones(){
  if (frameCount % 70 === 0) {
    var stone = createSprite(1200,120,40,10);
    stone.x = random(100,650);
  stone.addImage(stoneImage);
    stone.scale = 0.5;
    stone.velocityY = +2;
    
    stone.lifetime =250;
    stoneGroup.add(stone);
}
}
