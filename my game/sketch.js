
var platform
var player
var jump =0
var spike
var spikeWall1
var spikeWall2
var bat1
var bat2
var batFly

function preload(){
 batFly = loadAnimation('images/bat1.png','images/bat2.png','images/bat3.png','images/bat4.png');

spikeImg1 = loadImage('images/spike.png');
SpikeImg2 = loadImage('images/spikeSide.png');
SpikeImg3 = loadImage('images/spikeSide.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  platform1 = createSprite(150, height-120, 50, 20);
  platform2 = createSprite(width/4+20, height-200, 50, 20);
  platform3 = createSprite(width/2, height-280, 70, 20);
  platform4 = createSprite(3*width/4, height-360, 50, 20);
  platform5 = createSprite(width -150, height-440, 50, 20);

  player = createSprite(200, 200, 10, 20);
  
  wall1 = createSprite(50, height/2, 20, height-100);
  wall2 = createSprite(width-50, height/2, 20, height-100);
  roof = createSprite(width/2, 50, width-80, 20);
  floor = createSprite(width/2, height-50, width-80, 20);
  

  bat1 = createSprite(3*width/8, height-280, 20, 20);
  bat2 = createSprite(5*width/8,height-280,20,20);

  bat1.addAnimation ( 'bat1an',batFly )
  bat2.addAnimation ( 'bat2an',batFly )

  bat1.scale = 0.3
  bat2.scale = 0.3

  bat1.velocityY = 2
  bat2.velocityY = -2

  invisWall1 = createSprite(3*width/8, height-280+100, 20, 20);
  invisWall2 = createSprite(3*width/8, height-280-100, 20, 20);
  invisWall3 = createSprite(5*width/8, height-280+100, 20, 20);
  invisWall4 = createSprite(5*width/8, height-280-100, 20, 20);

  invisWall1.visible = false
  invisWall2.visible = false
  invisWall3.visible = false
  invisWall4.visible = false



  spike = createSprite(width/2, height-300,10,20);
  spikeWall1 = createSprite(width/4+20-25, height-200,20,10);
  spikeWall2 = createSprite(3*width/4-25, height-360,20,10);


  spike.addImage(spikeImg1);
  spikeWall1.addImage(spikeImg2);
  spikeWall2.addImage(spikeImg3);
  
  spike.scale = 0.3
  spikeWall1.scale = 0.3
  spikeWall2.scale = 0.3
}

function draw() {
  background(30);  
  console.log(jump)
  

  interaction()
  batMovement()
  playerMovement()
  drawSprites();
}

function playerMovement(){
  /*if(keyDown('space')&&
  (
    player.collide(floor)|| 
    player.collide(platform1)||
    player.collide(platform2)||
    player.collide(platform3)||
    player.collide(platform4)||
    player.collide(platform5)
  )
  ){
    player.velocityY = -10
  }
*/

if(keyDown('space')&& jump >=1){
  jump = jump -1 
  player.velocityY = -10
}

  if(jump == 0 &&
  (
    player.collide(floor)|| 
    player.collide(platform1)||
    player.collide(platform2)||
    player.collide(platform3)||
    player.collide(platform4)||
    player.collide(platform5)
  )
  ){
    jump = jump +1
  }
  
  if(keyDown('a')||keyDown('left')){
    player.x = player.x -10
  }
  
  if(keyDown('d')||keyDown('right')){
    player.x = player.x + 10
  }
  

  player.velocityY = player.velocityY + 0.5
  
  player.collide(floor)
  player.collide(wall1)
  player.collide(wall2)
  player.collide(roof)
  player.collide(platform1)
  player.collide(platform2)
  player.collide(platform3)
  player.collide(platform4)
  player.collide(platform5)
}

function batMovement(){
  
  bat1.bounceOff(invisWall1)
  bat1.bounceOff(invisWall2)
  bat2.bounceOff(invisWall3)
  bat2.bounceOff(invisWall4)

}

function interaction(){
  if(player.isTouching(bat1) || player.isTouching(bat2) 
  || player.isTouching(spike) || player.isTouching(spikeWall1) || player.isTouching(spikeWall2)){
  
    player.x = 200
    player.y = 200

  }

}