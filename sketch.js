
let img;
let star;

function preload() {
  img = loadImage('images/edgy-boi.jpg');
}

function setup() {
  createCanvas(400, 400);
  background(220);
}

//a function that will generate a point within a 25x25 pixel boundary.
function randomPoint(x, y) {
    stroke('green');
    strokeWeight(3);
    let pointX = x + Math.floor(random(25));
    let pointY = y + Math.floor(random(25));
    point(pointX, pointY);
    return(`${pointX}, ${pointY}`);
}

function randomX(x) {
  return x + Math.floor(random(25));
}

function draw() {


  star = createGraphics(400, 400);

  star.strokeWeight(1);
  star.stroke('black')
  
  star.beginShape();
  star.vertex(randomX(175), randomX(15));
  star.vertex(randomX(215), randomX(145));
  star.vertex(randomX(325), randomX(150));
  star.vertex(randomX(250), randomX(225));
  star.vertex(randomX(300), randomX(350));
  star.vertex(randomX(200), randomX(275));
  star.vertex(randomX(75), randomX(350));
  star.vertex(randomX(135), randomX(225));
  star.vertex(randomX(50), randomX(150));
  star.vertex(randomX(150), randomX(135));
  star.endShape(CLOSE);

  image(star, 400, 0);

  img.mask(star);
  image(img, 0, 0, 400, 400);

  noLoop();

}
