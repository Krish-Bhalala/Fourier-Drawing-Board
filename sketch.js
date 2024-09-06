const backgroundColor = 25;
let time = 0;
let path = [];
let width = 1300;
let height = 500;
let drawingPathX = [];
let drawingPathY = [];
let fourierX = [];
let fourierY = [];
let state = -1;
const USER = 0;
const MACHINE = 1;

function setup() {
  createCanvas(width, height);
}

function mousePressed() {
  state = USER;
  drawing = [];
  drawingPathX = [];
  drawingPathY = [];
  time = 0;
  path = [];
}

function mouseReleased() {
  state = MACHINE;
  const skip = 1;
  for (let i = 0; i < drawing.length; i += skip) {
    drawingPathX.push(drawing[i].x);
    drawingPathY.push(drawing[i].y);
  }
  fourierX = dft(drawingPathX);
  fourierY = dft(drawingPathY);

  fourierX.sort(fourierComparator);
  fourierY.sort(fourierComparator);
}

function fourierComparator(a,b){
  return b.amplitude - a.amplitude;
}

function epicycles(x,y,rotation,fourier){
  // Calculate and draw epicycles
  for (let i = 0; i < fourier.length; i++) {
    let prev_X = x;
    let prev_Y = y;
    frequency = fourier[i].frequency; 
    phase = fourier[i].phase + rotation;                       // Determine frequency for the current circle
    radius = fourier[i].amplitude;            // Calculate radius based on harmonic series

    // Update position based on current circle
    x += radius * cos(frequency * time + phase);
    y += radius * sin(frequency * time + phase);

    // Draw circle and line to the current point
    stroke(255, 100);
    noFill();
    ellipse(prev_X, prev_Y, radius * 2);

    stroke(255);
    line(prev_X, prev_Y, x, y);
  }

  return createVector(x,y);
}

function draw() {
  background(backgroundColor);

  if (state == USER) {
    let point = createVector(mouseX - width / 2, mouseY - height / 2);
    drawing.push(point);
    stroke(255);
    noFill();
    beginShape();
    for (let v of drawing) {
      vertex(v.x + width / 2, v.y + height / 2);
    }
    endShape();
  } else if(state == MACHINE) {
    let vectorX = epicycles(550,100,0,fourierX);
    let vectorY = epicycles(200,300,HALF_PI,fourierY);
    let vector = createVector(vectorX.x,vectorY.y);

    path.unshift(vector);                            // Add current y position to the path array

    line(vectorX.x, vectorX.y, vector.x, vector.y);
    line(vectorY.x, vectorY.y, vector.x, vector.y);       // Connect last circle point to the path

    // Render the path using stored y positions
    beginShape();
    noFill();
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    let timeInterval = TWO_PI / fourierY.length;
    time += timeInterval;                               // Increment time to animate the circles

    if (time > TWO_PI) {
      time = 0;
      path = [];
    }
  }

  if (path.length > 1000) {
    path.pop();                               // delete unnecessary points
  }

}
