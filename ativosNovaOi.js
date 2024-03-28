//Visualizando as cidades dos EUA, onde as latitudes/longitudes setadas em uma arquivo de texto são distribuidas pela tela.

var cities;

function preload() {
  cities = loadTable("data/todos_pontos.csv", "header");
}

function setup() {
   createCanvas(windowWidth, windowHeight);
   noStroke();
}

function draw() {
 background(0);
 
 push();
 translate(-200, 10); 
 scale(1.5);
 for(var i = 0; i < cities.getRowCount(); i++){
   var longitude = cities.getString(i, "lng");
   longitude = parseInt(longitude);
   longitude = typeof longitude == 'number' && !isNaN(longitude)  ? longitude : 0;   
   
   var latitude = cities.getString(i, "lat");
   latitude = parseInt(latitude);
   latitude = typeof parseInt(latitude) == 'number' && !isNaN(latitude) ? latitude : 0;   
   
   
   setPontoNormal(longitude, latitude);
 }
 
 //RJ
 setPontoImovelReversivel(width / 2 + 80, height / 2 - 25); 
 setPontoImovelReversivel(width / 2 + 83, height / 2 - 27);
 setPontoImovelReversivel(width / 2 + 85, height / 2 - 23);
 setPontoImovelReversivel(width / 2 + 90, height / 2 - 27);
 setPontoImovelReversivel(width / 2 + 87, height / 2 - 24);
 setPontoImovelReversivel(width / 2 + 85, height / 2 - 30);
 setPontoImovelReversivel(width / 2 + 80, height / 2 - 22);
 setPontoImovelReversivel(width / 2 + 95, height / 2 - 25);
 setPontoImovelReversivel(width / 2 + 77, height / 2 - 23);
 setPontoImovelReversivel(width / 2 + 94, height / 2 - 25);
 setPontoImovelReversivel(width / 2 + 88, height / 2 - 29);
 setPontoImovelReversivel(width / 2 + 80, height / 2 - 26);
 setPontoImovelReversivel(width / 2 + 85, height / 2 - 25);
 setPontoImovelReversivel(width / 2 + 75, height / 2 - 20);
 setPontoImovelReversivel(width / 2 + 70, height / 2 - 23);
 setPontoImovelReversivel(width / 2 + 77, height / 2 - 30);
 setPontoImovelReversivel(width / 2 + 90, height / 2 - 25);
 setPontoImovelReversivel(width / 2 + 85, height / 2 - 27);
 setPontoImovelReversivel(width / 2 + 89, height / 2 - 22);
 setPontoImovelReversivel(width / 2 + 80, height / 2 - 20);
 
 //MG
 setPontoImovelReversivel(width / 2 + 80, height / 2 - 60);
 
 //BA
 setPontoImovelReversivel(width / 2 + 140, height / 2 - 138);
 
 //PA
 setPontoImovelReversivel(width / 2 - 22, height / 2 - 250);
 
 //CE
 setPontoImovelReversivel(width / 2 + 140, height / 2 - 242);
 
 //RN
 setPontoImovelReversivel(width / 2 + 188, height / 2 - 205);
 
 //AM
 setPontoImovelReversivel(width / 2 - 95, height / 2 - 215);
 
 //GO
 setPontoImovelReversivel(width / 2, height / 2 - 160);
 setPontoImovelIreversivel(width / 2 + 5, height / 2 - 163);
  
 //MT
 setPontoImovelReversivel(width / 2 - 56, height / 2 - 170);
 setPontoImovelReversivel(width / 2 - 58, height / 2 - 165);
  
 //MS
 setPontoImovelReversivel(width / 2 - 30, height / 2 - 130);
  
 //DF
 setPontoImovelReversivel(width / 2 + 20, height / 2 - 170);
 setPontoImovelReversivel(width / 2 + 25, height / 2 - 167);
  
 //SC
 setPontoImovelReversivel(width / 2 + 18, height / 2 + 28);
  
 //RS
 setPontoImovelReversivel(width / 2 - 15, height / 2 + 60);
 
 //PR
 setPontoImovelReversivel(width / 2 + 20, height / 2 - 10);
 setPontoImovelReversivel(width / 2 + 20, height / 2 - 16);
 setPontoImovelReversivel(width / 2 + 25, height / 2 - 16);
 setPontoImovelReversivel(width / 2 + 27, height / 2 - 18);
 setPontoImovelReversivel(width / 2 + 28, height / 2 - 13);
 
 //PAINEL DE INFORMAÇÕES SOBRE O MAPA 
 textSize(25);
 strokeWeight(2);
 stroke(0, 255, 0);
 fill(0, 150, 0);
 text("Nova Oi - Ativos", width / 2 - 333, height / 2 - 100);
 
 stroke(0, 255, 0);
 fill(0, 255, 0, 191);
 ellipse(width / 2 - 300, height / 2 - 50, 20);
 strokeWeight(1);
 stroke(0, 255, 0);
 fill(0, 150, 0);
 textSize(15);
 text("Reversivel", width / 2 - 285, height / 2 - 45);
 
 strokeWeight(2);
 stroke(255, 0, 0);
 fill(255, 0, 0, 191);
 ellipse(width / 2 - 300, height / 2 - 15, 20);
 stroke(255, 0, 0);
 fill(150, 0, 0);
 textSize(15);
 text("Não Reversivel", width / 2 - 285, height / 2 - 10);
 
 strokeWeight(5);
 stroke(0, 255, 0); 
 noFill();
 rect(width / 2 - 320, height / 2 - 80, 150, 100);
 
 strokeWeight(1);
 stroke(0, 255, 0);
 fill(0, 150, 0);
 textSize(10);
 text("Desenvolvido por: willianxz", width / 2 - 305, height / 2 + 35);
 
 noLoop();
}

function setPontoNormal(lng, lat){
  fill(255, 150);
  var x = map(lng, -1000, 0, 0, width);
  var y = map(lat, 0, -500, 0, height);
  ellipse(x, y, 1, 1);
}

function setPontoImovelReversivel(x , y){
  fill(0, random(50, 255) , 0, 191);
  ellipse(x, y, 10);
}

function setPontoImovelIreversivel(x, y){
  fill(random(50,255), 0, 0, 191);
  ellipse( x, y, 10);
}
