let origin;
let bob;
let len;
let angle = 0.785;
let avel = 0;
let aacc = 0;



function setup() {
  createCanvas(400, 400);
  
  len = 250;
  origin = createVector(width/2, 0);
  bob = createVector(width/2, len);
}

function draw() {
  background(220);
  
  bob.x = origin.x + len * sin(angle);
  bob.y = origin.y + len * cos(angle);
  
  line(origin.x, origin.y, bob.x, bob.y);
  ellipse(bob.x, bob.y, 30, 30);
  
  aacc = -1/len * sin(angle);
  
  angle+= avel;
  avel += aacc;
  
  avel *= 0.99;
  
  
}
