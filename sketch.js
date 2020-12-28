var wall
var thickness
var speed
var weight
var bullet


function setup() {
  background(255,255,255);  
  createCanvas(1600,400);
  bullet= createSprite(50, 200, 50, 50);
  wall= createSprite(1200, 200, thickness, height/2);
  speed=random(2223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
    background(0)
  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0,);
    }

    if(deformation<180 && deformation>100)
    {
      bullet.shapecolor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
      hasCollided();
    }
  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftedge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
  
   if(hasCollided(lbullet,lwall))

   {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
     
     if (damage>10)
     {
       wall.shapeColor=color(255,0,0);
     }

     if (damage<10)
     {
       wall.shpeColor=color(0,255,0)
     }
   }

}