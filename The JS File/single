let origin;
let bob;
let len;
let angle = 0.785;
let avel = 0;
let aacc = 0;
let secorigin;
let secbob;
let seclen;
let r;
let sangle = 0.62;
let savel = 0;
let saacc = 0;


function setup() {
  createCanvas(400, 400);
  r = 30;
  len = 250;
  origin = createVector(width/2, 0);
  bob = createVector(width/2, len);
  
  seclen = 80;
  secorigin = createVector(width/2, len);
  secbob = createVector(width/2, len+seclen);
}

function draw() {
  background(220);
  
  bob.x = origin.x + len * sin(angle);
  bob.y = origin.y + len * cos(angle);
  
  secbob.x = secorigin.x + seclen * sin(sangle);
  secbob.y = secorigin.y + seclen * cos(sangle);
  
  
  line(origin.x, origin.y, bob.x, bob.y);
  fill(0);
  ellipse(bob.x, bob.y, r, r);
  
  line(bob.x, bob.y, secbob.x, secbob.y);
  ellipse(secbob.x, secbob.y, r, r);
  
  aacc = -1/len * sin(angle);
  
  angle+= avel;
  avel += aacc;
  
  avel *= 0.99;
  
  saacc = -1/seclen * sin(sangle);
  
  sangle+= savel;
  savel += saacc;
  
  savel *= 0.99;
  
  
}
