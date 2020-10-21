const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world

var box1

var ground1

var box2

function setup(){
    var canvas =createCanvas(400,400);

    engine=Engine.create();
    world=engine.world;

    box1= new BOX(150,250,70,70);

    ground1= new GROUND(200,370);

    box2= new BOX(180,180,70,100);

  

}
function draw(){
background(0);

Engine.update(engine);

box1.display();
ground1.display();
box2.display();
}