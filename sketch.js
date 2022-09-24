tsp = [];
ids = [];
xcords = [];
xcordsS = [];
ycords = [];
var city;
sol = [];
let i = 2;
// preload images
  function preload(){
  loadTSP('berlin52.tsp');
    image = loadImage('city.png');
    sol = loadStrings("berlin52.sol");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("grey");
  for (i = 0, j=6; i < tsp.length & j<tsp.length; i++, j++) {
    ids[i] = tsp[j].split(" ")[0];
    xcords[i] = tsp[j].split(" ")[1];
    ycords[i] = tsp[j].split(" ")[2];
  }

  for (i = 0; i < 6; i++) {
    text(tsp[i], 10, i*20+10, width,);
  }
// draw stuff 
  showTSP();
  print(sol)
  drawSolution();

  drawSprites();
}

function draw() {
  const scale = Math.min(windowWidth/(maxX-minX), windowHeight/(maxY-minY));
  solN = sol.map(Number);
  xcordsN = xcords.map(Number);
  ycordsN = ycords.map(Number);

  traveler.setSpeed(1);

for (i = 2; i<solN.length; i++){
  for (j = 0; j<50; j++) {
    traveler.setSpeed(1);
    traveler.friction = 0.1
    print(i);
    traveler.attractionPoint(5,xcords[(solN[i]-1)]*scale,ycords[(solN[i]-1)]*scale);
    drawSprites();
    if (traveler.overlapPoint(xcords[(solN[i]-1)]*scale,ycords[(solN[i]-1)]*scale)) {
    traveler.setSpeed(0);

    }
  }
}

drawSprites();
noLoop();
}

function showTraveler(){
  const scale = Math.min(windowWidth/(maxX-minX), windowHeight/(maxY-minY));
  solN = sol.map(Number);
  xcordsN = xcords.map(Number);
  ycordsN = ycords.map(Number);

}



function loadTSP(filename){
  tsp = loadStrings(filename);
  for (i = 0, j=6; i < tsp.length & j<tsp.length; i++, j++) {
    ids[i] = tsp[j].split(" ")[0];
    xcords[i] = tsp[j].split(" ")[1];
    ycords[i] = tsp[j].split(" ")[2];
  }
}

function showTSP(){
  // scale numbers to match window size
  xcordsN = xcords.map(Number);
  ycordsN = ycords.map(Number);
  maxX = Math.max.apply(null, xcordsN.filter(Boolean));
  maxY = Math.max.apply(null, ycordsN.filter(Boolean));
  minX = Math.min.apply(null, xcordsN.filter(Boolean));
  minY = Math.min.apply(null, ycordsN.filter(Boolean));
  const scale = Math.min(windowWidth/(maxX-minX), windowHeight/(maxY-minY));

  for (i = 0; i<ids.length; i++){
    city = createSprite(xcords[i]*scale,ycords[i]*scale,5,5);
    city.addImage(image);
    city.scale = 0.01
    text(ids[i],xcords[i]*scale,ycords[i]*scale);
  }
}

var traveler;

function drawSolution(){
  const scale = Math.min(windowWidth/(maxX-minX), windowHeight/(maxY-minY));
  solN = sol.map(Number);
  xcordsN = xcords.map(Number);
  ycordsN = ycords.map(Number);



traveler = createSprite(xcords[(solN[2]-1)]*scale,ycords[(solN[2]-1)]*scale,10,10);
//traveler.addImage(image);
traveler.scale = 0.5
// print(xcords[(solN[2]-1)]);
// print(xcords[40]);
// print((solN[2]))
// print(ycords[(solN[2]-1)]);
// print(ycords[40]);
if (sol[0] == tsp[0][1]){
for (i = 0; i<solN.length; i++){

}
}
}


