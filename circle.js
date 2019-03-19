class circle
{
//constructor builds object
  constructor(x,y,diameter,speed)
{
  // properties
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speed = speed;
}
// method/function
display()
{
  fill(random(255), random(255), random(255)
    ellipse(this.x, this.y, this.diameter);
}

move()
{
this.x+= this.speed;
if(this.x == width - this.radius || this.x < this.diamter /2)

{
  this.speed *=-1;
}
//ellipse for this.x, this.y, this.radius
}
