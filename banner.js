// Implement using P5js. (Yes)
// Include at least 2 custom functions. (Yes)
// Include at least 1 loop. (Yes)
// Include animation. (Yes)
// Harmony in design. (Not sure, Put stripe with Australian colors)

function setup() {
  createCanvas(500, 500)
}

let counter = 0
const txtSize = 40
const centerPosition = 250 - txtSize / 2
const message = 'Create with confidence - Creative Coding'
function draw() {
  background(256)
  // Render stripe
  noStroke()
  for (let i = 0; i < height; i += 100) {
    fill(206, 213, 229)
    rect(0, i, width, 50)
    fill(231, 209, 213)
    rect(i, 0, 50, height)
  }

  // Render text
  textStyle(BOLD)
  textAlign(CENTER)
  textWrap(WORD)
  textSize(txtSize)
  fill(...changeRGBColor(counter))
  text(message, 0, changePosition(counter), width)
  counter += 1
}

function changeRGBColor(counter) {
  // When a text lands in the middle
  if (counter >= centerPosition) {
    return [counter % 256, (counter * 2) % 256, (counter * 3) % 256]
  }

  return [0, 0, 0]
}

function changePosition(counter) {
  return counter > centerPosition ? centerPosition : counter
}
