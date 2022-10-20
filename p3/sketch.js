let clr;
let no;

function setup() {
  let canvas = createCanvas(200, 200); //create canvas half screen width
  canvas.addClass('positioned'); //add positioned class to canvas (see style.css)
  let params = getParams(); //get values from URL
  clr = 255-params.color; 
  no = params.num;

  background(params.color);
  noStroke();
}

function draw() {
  fill(clr);
  ellipse(random(200), random(200), 20);
}
