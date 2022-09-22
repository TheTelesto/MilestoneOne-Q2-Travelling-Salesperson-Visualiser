tsp = [];
ids = [];
xcords = [];
ycords = [];
var city;
// preload images
  function preload(){
 loadTSP('berlin52.tsp');
  
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-110);
  background("grey");
  for (i = 0, j=6; i < tsp.length & j<tsp.length; i++, j++) {
    ids[i] = tsp[j].split(" ")[0];
    xcords[i] = tsp[j].split(" ")[1];
    ycords[i] = tsp[j].split(" ")[2];
  }
  print(tsp);
  print(ids);
  print(xcords);
  print(ycords);
  for (i = 0; i < 6; i++) {
    text(tsp[i], 10, i*20+10, width,);
  }
  showTSP();
 drawSprites();
}

function draw() {

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
  for (i = 0; i<ids.length; i++){
    
    city = createSprite(xcords[i],ycords[i],10,10);
    text(ids[i],xcords[i],ycords[i]);
  }
}