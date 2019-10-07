function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  
}

function draw() {
  background(255);

  for (var x = 100; x < width-100; x = x + 10) {
  stroke(x, mouseY, mouseX);
    line(x, height/2, mouseX, mouseY);
  }
}
