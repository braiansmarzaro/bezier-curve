let p0,p1,p2;

function setup() {
  createCanvas(840, 600);
  p0 = createVector(0,height/2);
  p1 = createVector(width/3,0);
  p2 = createVector(width*2/3,0);
  p3 = createVector(width,height/2);
}

function draw() {
  background(0);
  stroke(255);

  noFill();
  p1.x = mouseX;
  p1.y = mouseY;
  let delta = 0.05;
  colorMode(HSB)
  for (let t = 0; t <= 1.01; t += delta) {
    
    stroke(t*360,255,255,.6);
    let v = cubic(p0,p1,p2,p3,t);
    vertex(v.x, v.y);
  }

  // beginShape();
  // bezierVertex(mouseX, mouseY, 400, 400, 600, 300);
  // bezierVertex(400, 600, 200, 100, 0, 300);
  // endShape();

  

} 
function cubic(p0, p1, p2,p3,t) {
  // let x = (1 - t) * (1 - t) * (1 - t) * p0.x + 3 * (1 - t) * (1 - t) * t * p1.x + 3 * (1 - t) * t * t * p2.x + t * t * t * p3.x;
  // let y = (1 - t) * (1 - t) * (1 - t) * p0.y + 3 * (1 - t) * (1 - t) * t * p1.y + 3 * (1 - t) * t * t * p2.y + t * t * t * p3.y;
  let v1 = quadratic(p0, p1, p2, t);
  let v2 = quadratic(p1, p2, p3, t);
  let x = lerp(v1.x, v2.x, t);
  let y = lerp(v1.y, v2.y, t);
  line(v1.x, v1.y, v2.x, v2.y);
  return createVector(x, y);
}
function quadratic(p0, p1, p2, t) {
  // let x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
  // let y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
  let x1 = lerp(p0.x, p1.x, t);
  let y1 = lerp(p0.y, p1.y, t);
  let x2 = lerp(p1.x, p2.x, t);
  let y2 = lerp(p1.y, p2.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  line(x1, y1, x2, y2);
  return createVector(x, y);
}

