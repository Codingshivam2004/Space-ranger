var spaceShip;
var space;
var alienship1;
var alienship2,alienship3;

var spaceshipImage,spaceImage;
var alienship1Image,alienship2Image,alienship3Image;

function preload() {
spaceImage = loadImage("space.png");
spaceshipImage = loadImage("spaceShip.png");
alienship1Image = loadImage("alienship1.png");
}

function setup() {
  createCanvas(1550,740);
  var space = createSprite(0,0);
  space.addImage(spaceImage);
  space.scale = 4.5;
  space.velocityY = 2;
 

var spaceShip = createSprite(650,670,20,20);
spaceShip.addImage(spaceshipImage);
spaceShip.scale = 1.3;
}

function draw() {
  background(255,255,255);  
  //Moving background
 //if(space.y>680){
   //space.y = 600;
 //}

 alienShip();
  drawSprites();
}
function alienShip(){
  if(frameCount%100===0){
var alienship1 = createSprite(Math.round(random(100,600,)),300,20,20);
alienship1.addImage(alienship1Image);
alienship1.velocityY = 2;
}

}
