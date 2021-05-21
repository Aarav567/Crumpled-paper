const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Cp;
var Gorund1;


function preload(){



}




function setup(){
    var canvas = createCanvas(600,400);
  
  
    engine = Engine.create();
    world = engine.world;

	Ground1= new Ground(300,350,600,10);
	Cp= new CP(100,340,30);
	




}

function draw(){
    background("white");
    Engine.update(engine);

        



   Ground1.display();
   Cp.display();

}