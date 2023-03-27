
var trex ,trex_running;
var piso ,arena;
var pisof;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
arena=loadImage("ground2.png");
nube=loadImage("cloud.png");
cactes=loadImage("obstacle1.png");
cactas=loadImage("obstacle2.png");
cactis=loadImage("obstacle3.png");
cactaes=loadImage("obstacle4.png");
cactais=loadImage("obstacle5.png");
cactaos=loadImage("obstacle6.png");
trex_chok=loadImage("trex_collided.png");
}

function setup(){
  createCanvas(1200,500)
  
  //crear sprite del t-rex.
  trex=createSprite(200,430,100,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.8;

 //crear sprite del suelo.
 piso=createSprite(200,450);
 piso.addImage("moving",arena);
 piso.x=piso.width/2;
 piso.velocityX=-8;

 //crear sprite piso falso.
 pisof=createSprite(200,480,200,20)
 pisof.visible=false;

 cloud=createGroup();
 obstaculo=createGroup();
}

function draw(){
  background("black")
  drawSprites();
if(keyDown("space")&& trex.y >= 425){
  trex.velocityY=-17
}

//if(obstaculo.isTouching(trex)){
//trex.velocityY=0;
//trex.changeAnimation("choking",trex_chok);
//}
trex.velocityY=trex.velocityY+0.8;
trex.collide(pisof);

if(piso.x<0){
  piso.x=piso.width/2

}
nubes();
cactus();
}

//funcion nubes.
function nubes(){
  if(frameCount %50 === 0){
    aa=createSprite(1250,150);
    aa.addImage("ae",nube); 
    aa.velocityX=-8
    aa.y=random(140,200);
    cloud.add(aa)
}
  }
  //funcion cactus.
  function cactus(){
    if(frameCount % 70 === 0){
      cactos=createSprite(1000,430)
      cactos.scale=0.7
    cactos.velocityX=-8
    var gi=Math.round(random(1,6));
    switch(gi){
      case 1: cactos.addImage(cactes);
      break;
      case 2: cactos.addImage(cactas);
      break;
      case 3: cactos.addImage(cactis);
      break;
      case 4: cactos.addImage(cactaes);
      break;
      case 5: cactos.addImage(cactais);
      break;
      case 6: cactos.addImage(cactaos);
      break;
      default:break;
    }
    }

    obstaculo.add(cactos);
  }