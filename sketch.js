var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(200,150,50,50);
  object1.shapeColor = "orange"
  object2 = createSprite(300,200,50,50);
  object2.shapeColor = "orange";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
object1.x = mouseX;
object1.y = mouseY;
  if(isTouching(object1,object2)){
object1.shapeColor= "yellow";
object2.shapeColor= 'yellow'
  
  }
  else{
    object1.shapeColor = "orange";
    object2.shapeColor = "orange";
  }
  drawSprites();
}
