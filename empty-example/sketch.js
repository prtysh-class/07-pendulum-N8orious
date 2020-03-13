let w;
let column;
let row;
let board;
let next;


function setup() {
  createCanvas(400, 400);
  w = 25;
  column = floor(width / w);;
  row = floor(height / w);
  //creating 2d array
  board = new Array(column);
  for (let i = 0; i < column; i++) {
    board[i] = new Array(row);
  }
  //for the swap
  next = new Array(column);
  for (i = 0; i < column; i++) {
    next[i] = new Array(row);
}
init();
}


function draw() {
  background(255);
  generate(); //calling the new generation fn.
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      if ((board[i][j] == 1)) fill(0);
      else fill(255);
      stroke(0);
      rect(i * w, j * w, w - 1, w - 1);
    }
  }
}

function mousePressed() {
  init();
}

function init() {

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      board[i][j] = floor(random(2));
      next[i][j] = 0
    }
  }
}

function generate() {
  for (let x = 1; x < column-1; x++) {
    for (let y = 1; y < row-1; y++) {

      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x + i][y + j];
        }
      }

      neighbors -= board[x][y];
      // Rules of Life
      if ((board[x][y] == 1) && (neighbors < 2)) next[x][y] = 0; // Loneliness
      else if ((board[x][y] == 1) && (neighbors > 3)) next[x][y] = 0; // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1; // Reproduction
      else next[x][y] = board[x][y]; // Stasis
    }
  }
let temp = board;
  board = next;
  next = temp;
}
