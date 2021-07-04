var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup() {
  createCanvas(800,400);

  
  angleMode(DEGREES);
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  translate(200,200)
  rotate(-90)

  //arc(500, 550, 70, 70, PI + QUARTER_PI, TWO_PI);


  hr = hour();
    mn = minute();
    sc = second();

  scAngle = map(sc,0,60,0,360);
  //stroke(255,0,0);
  //strokeWeight(7);
  //line(400,200,1000,0);
  
  mnAngle = map(mn,0,60,0,360);
  //stroke(0,255,0);
  //strokeWeight(7);
  //line(50,550,600,0);
  
  hrAngle = map(hr % 2,0,12,0,360);
  //stroke(0,0,255);
  //strokeWeight(7);
  //line(800,475,100,0);
  //rectMode(centre);

  push();
  rotate(scAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
    point(0,0)

     //drawing the arcs
      strokeWeight(10);
      noFill();
     //Seconds
      stroke(0,0,255);
      arc(0,0,300,300,0,scAngle);
     //Minutes
      stroke(0,255,0);
      arc(0,0,280,280,0,mnAngle);
     //Hour
      stroke(255,0,0);
      arc(0,0,260,260,0,hrAngle);

  drawSprites();
}