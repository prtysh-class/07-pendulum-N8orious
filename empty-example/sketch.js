var ship;
var enemy = [];
var bullets = [];

class Enemy
{
constructor(_pos, _vel)
  {
    this.vel = _vel;
    this.pos = _pos;
}
  show() {
 
    circle( this.pos.x, this.pos.y, 100);
         }

  move() {
   
 }

  death() {
  
}
  
  bulletcollision() {
    
  }
  
  class Bullet{
  constructor(_pos, _vel) {
    this.pos = _pos;
    this.vel = _vel;
    this.timer = millis();
    this.radius = 3;
  }
  show() {
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
  move() {
    this.pos.add(this.vel);
  }
  death() {
    if (millis() - this.timer > 5000) {
      bullets.shift();
    }
  }
  
  class Ship {
  constructor(_pos, _vel,) {
    this.pos = _pos;
    this.vel = _vel;
  }
  show() {
    stroke(255);
    strokeWeight(3);
    let x1 = this.pos.x;
    let y1 = this.pos.y;
    let x2 = this.pos.x + 5 * this.vel.copy().normalize().x;
    let y2 = this.pos.y + 5 * this.vel.copy().normalize().y;
    line(x1, y1, x2, y2);
  }
  
  
  }






function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(1);
  
  let x = width/2;
  let y = height/2;
  
  
}
    function KeyPressed() {
      // left arrow and right arrow for ship
      // space for bullets
    }