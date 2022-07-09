var Canvas
var   trackImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score 

var hero_running
var hero
var track,trackImage;

var obstacle1
var obstacle2

function preload(){
  trackImage = loadImage("track.jpg");
hero_running=loadAnimation("sprite1.png","sprite2.png","sprite3.png")
obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
}

function setup() {
  createCanvas(600,600);

  track=createSprite(300,300);
track.addImage(trackImage);
  track.velocityY = 4;
  track.scale=1.2;
  

  hero=createSprite(400, 200, 50, 50);
  hero.addAnimation("running",hero_running)
  hero.scale=0.3;

  score

}

function draw() {
  background(0);
  track.velocityY = 4;
  hero.x = World.mouseX;
    
  text("Score: "+ score, 500,50);
  
  drawSprites();
}