
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var angle=60; // variavel do angulo inicial
function setup() {
  createCanvas(400,400);  engine = Engine.create();  world = engine.world;
   var ball_options = {    restitution: 0.95,    frictionAir:0.01  }
   var ground_options ={     isStatic: true   };
   btn2 = createImg('up.png');  btn2.position(350,30);  btn2.size(50,50);  btn2.mouseClicked(vForce);  ground1 = Bodies.rectangle(100,300,100,20,ground_options);  World.add(world,ground1);  ball = Bodies.circle(100,10,20,ball_options);  World.add(world,ball);  ground = Bodies.rectangle(100,400,650,20,ground_options);  World.add(world,ground);  rectMode(CENTER);  ellipseMode(RADIUS);
}
function draw() {
  background(51);
  Engine.update(engine);  
  Matter.Body.rotate(ground1,angle); // rotaciona o corpo dentro do angulo especificado
  push(); //adiciona uma nova configuração e/ou elemento
  translate(ground1.position.x,ground1.position.y); // passa o centro da rotação para o objeto/sprite
  rotate(angle); // rotaciona o objeto com o angulo inicial
  rect(0,0,100,20); // cria o corpo retangular
  pop(); // volta ou retira a configuração anterior
  angle +=0.1; // aumenta o angulo a cada milissegundo em 0.1
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  
