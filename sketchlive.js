var myCircle;
var myCircle2;
var myCircle3;

class circle{
  //contructor builds objects
  constructor(){

    this.x
    this.y
    this.radius
  }

//properties
this.x = 100;
this.y = 100;
this.radius = 50;
}
// method function - does stuff

function setup()
{

  createCanvas(800, 600)
  background(0)//background color
  myCircle = new Circle(100,100,50,1)
  myCircle2 = new Circle(100,100,75,2)
  myCircle3 = new Circle(100,100,25,5)
}

function draw ()
{
  background(0)
  myCircle.move();
 myCircle.display();
 myCircle2.move();
 myCircle2.display();
 myCircle3.move();
 myCircle3.display();

}
{
  myCircle display()
  myCircle2 display ()
  ellipse (100, 100, 50)
}
