var brushImg,sleepImg,drinkImg,eatImg,moveImg,gymImg,bathImg,bgImg
var astronaut 
 
function preload(){
brushImg=loadAnimation("brush.png")
bathImg=loadAnimation("bath1.png","bath2.png")
sleepImg=loadAnimation("sleep.png")
drinkImg=loadAnimation("drink1.png","drink2.png",)
eatImg=loadAnimation("eat1.png","eat2.png",)
moveImg=loadAnimation("move.png","move1.png",)
gymImg=loadAnimation("gym11.png","gym12.png")
bgImg=loadImage("iss.png")
}
function setup() {
  createCanvas(800,400);
   astronaut= createSprite(300,250);
   astronaut.addAnimation("sleep",sleepImg)
   astronaut.scale=0.1
  
  }
function draw() {
   background(bgImg) 
   if(keyDown("UP_ARROW")){
     astronaut.addAnimation("brush",brushImg)
     astronaut.changeAnimation("brush")
     astronaut.y=250
     astronaut.velocityY=0
     astronaut.velocityX=0
   }
   if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gymImg)
    astronaut.changeAnimation("gym")
    astronaut.y=250
    astronaut.velocityY=0
    astronaut.velocityX=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eatImg)
    astronaut.changeAnimation("eat")
    astronaut.y=250
    astronaut.velocityY=-1
    astronaut.velocityX=1
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath",bathImg)
    astronaut.changeAnimation("bath")
    astronaut.y=250
    astronaut.velocityY=0
    astronaut.velocityX=0
  }
  if(keyDown("m")){
    astronaut.addAnimation("walk",moveImg)
    astronaut.changeAnimation("walk",moveImg)
    astronaut.velocityY=-1
    astronaut.velocityX=1
  }
    drawSprites();
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  