var wall,thickness;
var bullet,speed,weight;
var height;
var damage;
var bulletRightEdge, wallLeftEdge;
function setup() {
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  createCanvas(800,400);
  wall=createSprite(700, 200, thickness, height/2);
  bullet=createSprite(200,200,15,15);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);
  bullet.velocityX=9;
  if(hasCollided(bullet,wall))  {
    bullet.velocitX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}