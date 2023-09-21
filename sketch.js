
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
  

  let x1 = randomX(175);
  let y1 = randomX(15);

  let x2 = randomX(200);
  let y2 = randomX(145);

  let x3 = randomX(325);
  let y3 = randomX(135);

  let x4 = randomX(250);
  let y4 = randomX(225);

  let x5 = randomX(300);
  let y5 = randomX(350);

  let x6 = randomX(200);
  let y6 = randomX(275);

  let x7 = randomX(75);
  let y7 = randomX(350);

  let x8 = randomX(150);
  let y8 = randomX(225);

  let x9 = randomX(50);
  let y9 = randomX(150);

  let x10 = randomX(150);
  let y10 = randomX(135);



  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x4, y4);
  line(x4, y4, x5, y5);
  line(x5, y5, x6, y6);
  line(x6, y6, x7, y7);
  line(x7, y7, x8, y8);
  line(x8, y8, x9, y9);
  line(x9, y9, x10, y10);
  line(x10, y10, x1, y1);
  
}
