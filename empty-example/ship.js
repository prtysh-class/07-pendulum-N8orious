class Snake{
  constructor( _pos, _size, _vel, _acc){
this.pos = _pos;
this.size = _size;
this.vel = _vel;
this.acc = _acc;
    this.trail = {};
  }
}

function show(){
  circle(this.pos.x, this.pos.y, 10, 10);
}

function move(){
  this.pos.add(this.vel);
}

function direction(){
  
  if(key == 'i'){
    this.vel = createVector(0, -this.vel.mag());
    
    
  }

  if(key == 'j'){
    
    this.vel = createVector(-this.vel.mag(), 0);
    
  }
  
  if(key == 'k'){
    
    this.vel = createVector(0, this.vel.mag());
    
  }
  
  if(key == 'l'){
    
    this.vel = createVector(this.vel.mag(), 0);
    
  }


function setup() {
  createCanvas(450, 450);
  let p = createVector(width/2, height/2);
  let v = createVector(1,0);
  let a = createVector(0,0);
  let s = 3;

  snake = new Snake(p, v, a, s);
}

function draw() {
background(0, 255);
  snake.show();
  snake.move();

}

// function KeyIsPressed(){
//   print