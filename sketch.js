var road 
var car 
var opponentcar
var opponentcargroup
var score=0
var highscore=0
var gameState= 'PLAY'


function  preload() {
  roadImage=loadImage("Road.png")  
  carImage=loadImage("Screenshot (59).png")
  opponentcarImage=loadImage("Screenshot (61).png")
  accidentSound=loadSound("CarCrashSkid PE809001.mp3")
  
}
function setup() {
createCanvas(windowWidth,windowHeight)
road=createSprite(width/2,200)
road.addImage(roadImage)
road.velocityY=8
car = createSprite(width/2,height-20,20,20);
car.addImage(carImage);

opponentcargroup=new Group()

}
function draw() {
  if (gameState==='PLAY'){
    background(0)
    
    car.x=World.mouseX
   edges= createEdgeSprites();
  car.collide(edges);
  if(road.y > height){
    road.y = height/2;
  }
   Opponentcar()
drawSprites()
text("Score:"+score,100,100)
text ("highScore:"+highscore,100,50)
score = score + Math.round(getFrameRate()/60);
}
if (opponentcargroup.isTouching(car)){
  gameState="over"
  accidentSound.play()
  textSize(50)
  
  fill("skyblue")
  text("GAME OVER",250,200)
  if (score>highscore){
    highscore=score
}
score=0
if (keyDown("SPACE")){
  reset()
}
 
}
}

function Opponentcar() {
  if (World.frameCount % 120== 0) {
    opponentcar  = createSprite(Math.round(random(50, width-50),height-20, 100, 100));
      opponentcar .addImage(opponentcarImage);
    opponentcar.scale=1.5
    opponentcar.velocityY = 7;
    opponentcar.lifetime = 300;
    opponentcargroup.add(opponentcar);
    }
}
function reset() {
  gameState='PLAY'
}