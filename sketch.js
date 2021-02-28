var bg;
var ground,helcopImg,helcop;
var vinayak,bullet,bulletImg,vImage,bulletGroup;
var soldier1,soldier2;
var s2Image,sImage;
var base,baseImg,baseImg2,checkpoint2;
var v2Img,v3Img;

function preload(){
  bg = loadImage("bg.png.gif");
  helcopImg = loadImage("helicopter.png");

  vImage = loadImage("army.png");
  bulletImg = loadImage("bullet.png");
  v2Img = loadImage("army2.png");
  v3Img = loadImage("army4.png")

  s2Image = loadImage("rks.png");
  baseImg = loadImage("base.png");
} 

function setup() {
  createCanvas(displayWidth,displayHeight);
  ground = createSprite(200,680,15000,7);
  ground.shapeColor = "darkolivegreen";

  vinayak = createSprite(200,210,50,50);
  vinayak.addImage(vImage);
  vinayak.scale = 1.2;

  helcop = createSprite(200,200,20,20);
  helcop.addImage(helcopImg);

  soldier1 = createSprite(2048,620,20,20);
  soldier1.addImage(s2Image);
  soldier1.scale = 0.4;
  soldier1.collide(ground);

  base = createSprite(7650,490,30,30);
  base.addImage(baseImg);
  base.scale = 5;

  checkpoint2 = createSprite(7180,620,20,30);
  checkpoint2.shapeColor = "yellow";

  bulletGroup = new Group();

}

function draw() {
  background(bg); 
  
  if(keyDown("a")){
     vinayak.velocityY = 5;
  }

  camera.position.x = vinayak.x;

  vinayak.collide(ground);

  if(vinayak.isTouching(ground)){
     helcop.visible = false;
   }


  if(keyDown("S")){
     createBullet();
   }

  if(keyDown("RIGHT_ARROW")){
     vinayak.x = vinayak.x+10;
     vinayak.addImage(v2Img);
   }

  if(bulletGroup.isTouching(soldier1)){
     soldier1.destroy();
   }

  if(checkpoint2.isTouching(vinayak)){
     vinayak.addImage(v3Img); 
   }

  console.log(vinayak.x);

  drawSprites();
}

function createBullet(){
    bullet = createSprite(530, 50, 5, 10);
    bullet.velocityX = 7;
    bullet.scale = 0.3;
    bullet.lifetime = 100;
    bullet.addImage(bulletImg);
    bullet.y = vinayak.y;
    bullet.x = vinayak.x;
    bulletGroup.add(bullet);
    return bullet;

}