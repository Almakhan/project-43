const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg
var iss,issImage
var spacecraft,spacecraftImage
var spacecraft1,spacecraft1Image
var spacecraft2,spacecraft2Image
var spacecraft3,spacecraft3Image
var point

var hasDocked =false

function preload(){
bg=loadImage("Docking-undocking/spacebg.jpg")
issImage = loadImage("Docking-undocking/iss.png")
spacecraftImage = loadImage("Docking-undocking/spacecraft1.png")
spacecraft1Image=loadImage("Docking-undocking/spacecraft2.png")
spacecraft2Image=loadImage("Docking-undocking/spacecraft3.png")
spacecraft3Image=loadImage("Docking-undocking/spacecraft4.png")
}

function setup() {
  createCanvas(800,650);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  iss=createSprite(400, 300, 50, 50);
  iss.addImage(issImage)
  
  spacecraft=createSprite(400,476,50,50);
  spacecraft.addImage(spacecraftImage)
  spacecraft.scale=0.2
  spacecraft.visible=true

  spacecraft1=createSprite(300,500,50,50);
  spacecraft1.addImage(spacecraft1Image)
  spacecraft1.scale=0.2
  spacecraft1.visible=false

  spacecraft2=createSprite(400,500,50,50);
  spacecraft2.addImage(spacecraft2Image)
  spacecraft2.scale=0.2
  spacecraft2.visible=false

  spacecraft3=createSprite(500,500,50,50);
  spacecraft3.addImage(spacecraft3Image)
  spacecraft3.scale=0.2
  spacecraft3.visible=false

  

}

function draw() {
  background(bg);
    spacecraft.visible=true
    spacecraft1.visible=false
    spacecraft2.visible=false
    spacecraft3.visible=false

  spacecraft2.velocityX=0
  spacecraft3.velocityX=0
  spacecraft.velocityY=0

  iss.depth= spacecraft.depth
     iss.depth=iss.depth+1

  if(!hasDocked){

    if(keyDown("LEFT_ARROW")){
    
      spacecraft2.visible=true
      spacecraft2.velocityX=-1
      spacecraft3.visible=false
      spacecraft.visible=false
      spacecraft1.visible=false
     spacecraft.x= spacecraft2.x
     spacecraft1.x= spacecraft2.x
     spacecraft3.x= spacecraft2.x
     spacecraft2.y=spacecraft.y

    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft3.visible=true
      spacecraft2.visible=false
     spacecraft.visible=false
      spacecraft1.visible=false
      spacecraft3.velocityX=1
     spacecraft.x= spacecraft3.x
      spacecraft1.x= spacecraft3.x
      spacecraft2.x= spacecraft3.x
      spacecraft3.y=spacecraft.y
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft1.visible=true  
      spacecraft3.visible=false
      spacecraft2.visible=false
      spacecraft.visible=false
      spacecraft1.y=spacecraft.y
    }
    if(keyDown("UP_ARROW")){
     spacecraft.visible=true
      spacecraft.velocityY=-1
      spacecraft1.visible=false
     spacecraft3.visible=false
     spacecraft2.visible=false
    spacecraft2.y=spacecraft.y
     spacecraft3.y= spacecraft.y

    }

  }
  if(spacecraft.x<=340&&spacecraft.x>=330&&spacecraft.y<=375&&spacecraft.y>=365){
    spacecraft.velocityX=0
    spacecraft.velocityY=0
    spacecraft1.velocityX=0
    spacecraft1.velocityY=0
    spacecraft2.velocityX=0
    spacecraft2.velocityY=0
    spacecraft3.velocityX=0
    spacecraft3.velocityY=0
    hasDocked=true
    textSize(40);
  fill("lightBlue");
  text("Docking Successful !",150,580);
  
  }
  
 
  Engine.update(engine);  
  drawSprites();
}