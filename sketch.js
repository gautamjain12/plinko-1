const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine,world;
var divisons=[];
var divisionHeight=300;
var particles=[];
var plinkos=[];
var ground
function preload(){

}

function setup() {
  createCanvas(800,700);
 engine=Engine.create();
 world=engine.world;

 ground=new Ground(400,690,800,20);

for(var i=0; i<=width;i=i+80){
  divisons.push((new Division(i,height-divisionHeight/2,10,divisionHeight)))
  }
  for(var j=75;j<=width;j=j+60){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=50;j<=width-10;j=j+60){
    plinkos.push(new Plinko(j,175));

  }
for(var j=75; j<=width;j=j+60){
  plinkos.push(new Plinko(j,275));

}
for(var j=50;j<=width;j=j+60){
  plinkos.push(new Plinko(j,375));
}
Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255,255,255);  
  drawSprites();
  for(var n=0;n<divisons.length;n++){
    divisons[n].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));

  }
  for(var h=0;h<particles.length;h++){
    particles[h].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  ground.display();
}