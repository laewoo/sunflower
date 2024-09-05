let sunflowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Setting angle mode to degrees for easy rotations

  // Generate a lot of sunflowers randomly on the canvas
  for (let i = 0; i < 10; i++) { // Increased to 100 sunflowers
    let x = random(width);
    let y = random(height);
    let size = random(30, 100); // Reduced size for variation
    let speed = random(0.2, 1.5); // Slower and varied speed for smooth animation
    sunflowers.push(new Sunflower(x, y, size, speed));
  }
}

function draw() {
  background(135, 206, 235); // Sky blue background

  for (let sunflower of sunflowers) {
    sunflower.update();
    sunflower.display();
  }
}

class Sunflower {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.angle = random(360);
  }

  update() {
    this.angle += this.speed; // Update the rotation angle for animation
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle); // Rotate sunflower for animation

    // Draw sunflower petals
    stroke(255, 204, 0);
    fill(255, 204, 0);
    for (let i = 0; i < 20; i++) {
      rotate(18); // Spread petals in a circular pattern
      ellipse(this.size / 2, 0, this.size / 4, this.size / 8);
    }

    // Draw sunflower center
    fill(102, 51, 0); // Dark brown for center
    noStroke();
    ellipse(0, 0, this.size / 2);
    
    pop();
  }
}
