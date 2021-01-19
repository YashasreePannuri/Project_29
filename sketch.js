const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;


function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(750,325,200,20);

    //level 1
    b1 = new Box(750,295,20,40);
    b5 = new Box(770,295,20,40);
    b6 = new Box(790,295,20,40);
    b7 = new Box(810,295,20,40);
    b8 = new Box(730,295,20,40);
    b9 = new Box(710,295,20,40);
    b10 = new Box(690,295,20,40);
    //level 2
    b2 = new Box(750,255,20,40);
    b11 = new Box(770,255,20,40);
    b12 = new Box(790,255,20,40);
    b13 = new Box(730,255,20,40);
    b14 = new Box(710,255,20,40);
    //level 3
    b3 = new Box(750,215,20,40);
    b15 = new Box(770,215,20,40);
    b16= new Box(730,215,20,40);
    //level 4 
    b4 = new Box(750,175,20,40);

    polygon = new Polygon(100,300);

    
    sling = new SlingShot(polygon.body,{x:200,y:150})




}

function draw(){
    background(54,252,159);
    Engine.update(engine);

    stand.display();

    fill(255,49,211)
    b1.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    fill(147,35,209)
    b2.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    fill(72,35,209)
    b3.display();
    b15.display();
    b16.display();
    fill(47,154,208)
    b4.display();

    polygon.display();

    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();
}






