const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var umbrellaObject;
var thunderDuration;

var Bruce;
var BruceAnimation;
var lightning;
var storm1;
var storm2;
var storm3;
var storm4;

var scenery;
var backgroundImage;

var rainS


function preload(){
    BruceAnimation = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png",
    "images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png",
    "images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");  

storm1= loadImage("images/thunderbolt/1.png");
storm2= loadImage("images/thunderbolt/2.png");
storm3= loadImage("images/thunderbolt/3.png");
storm4= loadImage("images/thunderbolt/4.png");

backgroundImage= loadImage("background.jpg");
rainS=loadSound("rain-Thunder.wav");
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800,700);
    rainS.loop();
     rainS.play();
    scenery = createSprite(800,350,800,700);
    scenery.addImage(backgroundImage);
    scenery.velocityX=-3;
    scenery.scale=3
    if(frameCount % 200 === 0){

        for(var i=0; i<50; i++){
            drops.push(new WaterDrops(random(0,800), random(0,800)));
        }

    } 
    umbrellaObject = new Umbrella(400,435)
    
    Bruce = createSprite(400,525,50,100);   
    Bruce.addAnimation("walking",BruceAnimation);
    Bruce.scale = 0.5;
   
     


}
function draw(){

    Engine.update(engine);
    background(0);
    drawSprites(); 
    console.log(scenery.x);
    if(scenery.x < 0){
  
      scenery.x = 800;
   }
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
      thunderDuration=frameCount;
        thunder = createSprite(random(10,770), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(storm1);
            break;
            case 2: thunder.addImage(storm2);
            break; 
            case 3: thunder.addImage(storm3);
            break;
            case 4: thunder.addImage(storm4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderDuration + 20 === frameCount && thunder){
        thunder.destroy();
    }

 //displaying rain drops
 for(var i = 0; i<50; i++){
    drops[i].display();
    drops[i].update_Y_Position();
 }
 umbrellaObject.display();



}   

