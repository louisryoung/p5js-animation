const screenWidth = 600
const screenHeight = 600
function setup() {
  createCanvas(screenWidth, screenHeight)
  // Outer grey box
  noStroke()
  fill(200)
  rect(0, 0, screenWidth, screenHeight, 15)
  // Inner blue box
  fill(91, 145, 182)
  rect(25, 25, screenWidth - 50, screenHeight - 50, 15)
  // Grid
  stroke(0)
  strokeWeight(1)
  for (let x = 50; x < screenWidth; x += 50) {
    line(x, 50, x, screenWidth - 50)
  }

  for (let y = 50; y < screenHeight; y += 50) {
    line(50, y, screenHeight - 50, y)
  }
}

let offset = 0
function draw() {
  x = 250 * sin(1 * offset)
  y = 250 * sin(3 * offset + PI / 2)
  noStroke()
  fill(256)
  ellipse(width / 2 + x, height / 2 + y, 5, 5)
  offset += 0.005
}
