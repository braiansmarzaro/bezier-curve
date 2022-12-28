let p0,p1,p2;

function setup() {
  createCanvas(600, 600);
  p0 = createVector(0,300);
  p1 = createVector(300,0);
  p2 = createVector(600,300);
}

function draw() {
  background(0);
  stroke(255);

  noFill();
  beginShape();
  p1.x = mouseX;
  p1.y = mouseY;
  let delta = 0.05;
  colorMode(HSB)
  for (let t = 0; t <= 1.01; t += delta) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    stroke(t*360,255,255);
    line(x1, y1, x2, y2);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
  }
  endShape();

  // beginShape();
  // bezierVertex(mouseX, mouseY, 400, 400, 600, 300);
  // bezierVertex(400, 600, 200, 100, 0, 300);
  // endShape();

  

} 

