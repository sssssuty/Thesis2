var bx1;
var by1;
var bx2;
var by2;
var bx3;
var by3;
var bx7;
var by7;
var diameter = 15;
var overBox1 = false;
var overBox2 = false;
var overBox3 = false;
var overBox7 = false;
var locked1 = false;
var locked2 = false;
var locked3 = false;
var locked7 = false;
var x1Offset = 0.0; 
var y1Offset = 0.0; 
var x2Offset = 0.0; 
var y2Offset = 0.0; 
var x3Offset = 0.0; 
var y3Offset = 0.0; 
var x7Offset = 0.0; 
var y7Offset = 0.0; 
var u;
var a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  u = 100;
  // a = ((sqrt(3)*u)/2);
  a = 500;
  // bx1 = width/2;
  // by1 = height/2;
  // bx2 = bx1;
  // by2 = by1-u;
  // bx3 = bx1+a;
  // by3 = by1-(u/2);
  // bx7 = bx1-a;
  // by7 = by1-(u/2);
  bx1 = 200;
  by1 = 200;
  bx3 = bx1;
  by3 = by1-u;
  bx7 = bx1+a;
  by7 = by1;
  bx2 = bx7;
  by2 = by1-u;  
}

function draw() { 
  noStroke();
  background('#FFFDBD');
  fill('#F7BBAD');
  quad(bx1,by1,bx7,by7,bx2,by2,bx3,by3);
  
  noFill();
  // Test if the cursor is over the box 
  if (mouseX > bx1-diameter && mouseX < bx1+diameter && 
      mouseY > by1-diameter && mouseY < by1+diameter) {
    overBox1 = true;  
    if(!locked1) { 
      stroke('#4C60AD');
      strokeWeight(2);
      noFill();
    } 
  } else {
    noStroke();
    noFill(); //change this to noFill later
    overBox1 = false;
  }
  ellipse(bx1, by1, diameter, diameter);

  if (mouseX > bx2-diameter && mouseX < bx2+diameter && 
      mouseY > by2-diameter && mouseY < by2+diameter) {
    overBox2 = true;  
    if(!locked2) { 
      stroke('#4C60AD');
      strokeWeight(2);
      noFill();
    } 
  } else {
    noStroke();
    noFill(); //change this to noFill later
    overBox2 = false;
  }
  ellipse(bx2, by2, diameter, diameter);
  
  if (mouseX > bx3-diameter && mouseX < bx3+diameter && 
      mouseY > by3-diameter && mouseY < by3+diameter) {
    overBox3 = true;  
    if(!locked3) { 
      stroke('#4C60AD');
      strokeWeight(2);
      noFill();
    } 
  } else {
    noStroke();
    noFill(); //change this to noFill later
    overBox3 = false;
  }
  ellipse(bx3, by3, diameter, diameter);
  
  if (mouseX > bx7-diameter && mouseX < bx7+diameter && 
      mouseY > by7-diameter && mouseY < by7+diameter) {
    overBox7 = true;  
    if(!locked7) { 
      stroke('#4C60AD');
      strokeWeight(2);
      noFill();
    } 
  } else {
    noStroke();
    noFill(); //change this to noFill later
    overBox7 = false;
  }
  ellipse(bx7, by7, diameter, diameter);
  
  
}

function mousePressed() {
  
  if(overBox1) { 
    locked1 = true; 
    noStroke();
    noFill();
    x1Offset = mouseX-bx1; 
    y1Offset = mouseY-by1; 
  }
  if(!overBox1) {
    locked1 = false;
  }

  if(overBox2) { 
    locked2 = true; 
    x2Offset = mouseX-bx2; 
    y2Offset = mouseY-by2; 
  } 
  if(!overBox2) {
    locked2 = false;
  }
  
  if(overBox3) { 
    locked3 = true; 
    x3Offset = mouseX-bx3; 
    y3Offset = mouseY-by3; 
  } 
  if(!overBox3) {
    locked3 = false;
  }

  if(overBox7) { 
    locked7 = true; 
    x7Offset = mouseX-bx7; 
    y7Offset = mouseY-by7; 
  } 
  if(!overBox7) {
    locked7 = false;
  }

}

function mouseDragged() {
  if(locked1) {
    noStroke();
    fill(230);
    bx1 = mouseX-x1Offset; 
    by1 = mouseY-y1Offset; 
  }
  
  if(locked2) {
    bx2 = mouseX-x2Offset; 
    by2 = mouseY-y2Offset; 
  }
  
  if(locked3) {
    bx3 = mouseX-x3Offset; 
    by3 = mouseY-y3Offset; 
  }
  
  if(locked7) {
    bx7 = mouseX-x7Offset; 
    by7 = mouseY-y7Offset; 
  }
}

function mouseReleased() {
  locked1 = false;
  locked2 = false;
  locked3 = false;
  locked7 = false;
}