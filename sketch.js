

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimg;
const Constraint=Matter.Constraint;
var divisions = [];
var particles = [];
var plinko = [];
var divisionHeight = 300;


function setup() {
	createCanvas(480, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new box(width/2,650,width,10);
 for(var k =0; k<= innerWidth; k =k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10,divisionHeight));
 }

 for (var j = 15; j <=width; j=j+50){
  plinko.push(new Plinkos(j,75,10));
}

for (var j = 15; j <=width-10; j=j+50){
  plinko.push(new Plinkos(j,275,10));
}

for (var j = 30; j <=width-10; j=j+50){
  plinko.push(new Plinkos(j,175,10));
}

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(220,150,255);
  ground.display();
  for(var a = 0; a < divisions.length ; a ++ ){
    divisions[a].display();
  }
  

  if (frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

 for (var c = 0; c < particles.length; c++ ){
  particles[c].display();
}


for (var b = 0; b < plinko.length; b++ ){
  plinko[b].display();
}

}