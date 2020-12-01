const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
/* Coordinates to place box2 on top of box1
    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);

*/

//Box2, x cordinate is changed so that it topples
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    ground=new Ground(200,390,400,20);
   console.log(box1);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();

}