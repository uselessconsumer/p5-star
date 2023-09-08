//generate a star where each point has the chance to be drawn within a certain point, giving the star a hand drawn effect.

//

function setup() {
  createCanvas(400, 400);
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
  noLoop();
  background(220);

  strokeWeight(1);
  stroke('black')

  let coordinate = '200, 200';
  

  let x1 = randomX(25);
  let y1 = randomX(25);
  let x2 = randomX(100);
  let y2 = randomX(25);
  let x3 = randomX(100);
  let y3 = randomX(50);

  line(x1, y1, x3, y3);
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);

}
