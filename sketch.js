//generate a star where each point has the chance to be drawn within a certain point, giving the star a hand drawn effect.

//

function setup() {
  createCanvas(400, 400);
  console.log(Math.floor(random(50)));
}

//a function that will generate a point within a 25x25 pixel boundary.
//create a 
function randomPoint(x, y) {

    strokeWeight(5);
    square(x, y, 25);
    stroke('green');
    let pointX = x + Math.floor(random(25));
    let pointY = y + Math.floor(random(25));
    point(pointX, pointY)

}




function draw() {
  noLoop();
  background(220);

  strokeWeight(1);
  stroke('black')
  square(100, 100, 25);

  randomPoint(200, 200);

}
