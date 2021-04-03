const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var START = 1;
var END = 0;
var gameState = START;

var score = 0;
var count = 0;
var particle1,particle2,particle3,particle4,particle5;
var par;


function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground1 = new Ground(1,360,10,900);
  ground2 = new Ground(800,355,10,900);
  ground3 = new Ground(400,1,900,10);

  particle1 = new Particle(100,100,10);
  particle2 = new Particle(200,100,10);
  particle3 = new Particle(300,100,10);
  particle4 = new Particle(400,100,10);
  particle5 = new Particle(500,100,10);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


   for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    

    
}
 


function draw() {
  background("black");
  
  scoreBoard();
  
  Engine.update(engine);
 
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();

  ground1.display();
  ground2.display();
  ground3.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
 
  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }



}

function scoreBoard(){

  textSize(30)

  text("500" , 20,550);
  text("500" , 95,550);
  text("500" , 170,550);
  text("500" , 250,550);
  text("100" , 325,550);
  text("100" , 400,550);
  text("100" , 490,550);
  text("200" , 567,550);
  text("200" , 650,550);
  text("200" , 745,550);

  //console.log(particle1.body.position.x);

  if(particle1.body.position.x < 326){
      score = score + 500;
  }

  if(particle1.body.position.x >= 327 && particle1.body.position.x < 491 ){
    score = score + 100;
  }

  if(particle1.body.position.x >= 492 && particle1.body.position.x < 746 ){
    score = score + 200;
  }

  fill("yellow");
  text("Score : " + score,20,30);

  /*if (particle != null){

    particle.display();
  
   if (particle.body.position.y > 760){
 
     if(particle.body.position.x < 300){

         score = score + 500;
         particle = null
         if ( count >= 5)
         gameState = "end"
     
     }
   }
 }*/



}

function mousePressed(){

if(gameState !== END){
  
  count = count + 1;
  par = new Particle(mouseX,10,10,10);

}
}

