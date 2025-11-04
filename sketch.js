let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.01);
  ball.addForce(gravity);
  ball.update();
  ball.show();
}

function mouseReleased() {

let d = dist(mouseX, mouseY, ball.pos.x, ball.pos.y);

if (d < ball.w/2) {

  let ff = p5.Vector.sub(ball.pos, createVector(mouseX, mouseY));
  ff.mult(0.3);
  ball.addForce(ff);

}
}
