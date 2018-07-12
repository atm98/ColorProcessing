var RadioButton;
function setup() {
  createCanvas(400,400);
  let r = floor(random(256));
  let g = floor(random(256));
  let b = floor(random(256));
  background(r,g,b);
  RadioButton = createRadio();
  RadioButton.option("red-ish");
  RadioButton.option("green-ish");
  RadioButton.option("blue-ish");

}

function draw() {
  
}
