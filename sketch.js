/*
	JOAO MARTINHO MOURA, 2011

	http://www.jmartinho.net
		
	HTML5 Visual Art - " Transversal Lines, 2011 "
	Transversal Lines: infinite abstract visual b&w line work,
	by Joao Martinho Moura, 2011. 

	http://jmartinho.net/transversal-lines

	This code was created in 2010, presented in the Processing.js homepage in 2013,
	and exhibited at MEDIA LAB PRADO, Madrid, in 2013 for the Processing Community Day.

	Processing was initiated by Ben Fry and Casey Reas. It is developed by a small team of volunteers.
	John Resig ported the 2D context of processing to javascript using the html5 canvas element in 2012.

	p5.js was created by Lauren McCarthy and is developed by a community of collaborators 
	In 2019 I decided to port this skect to p5js 
  
*/	


let contadorTempoRefresh = 0;

let tempoBrancoPreto = 0;
let tempoApaga = 0;
let tempo = 0;

let tamanhoWIDTH = 600;
let tamanhoHEIGHT = 480;

let numeroPontos = 30;

let NumerosArrayX =  [];
let NumerosArrayY =  [];


let RND_NumerosArrayX =  [];
let RND_NumerosArrayY =  [];


let contaMouse=0;
let MX;
let MY;

function setup() {
  
  tamanhoWIDTH = windowWidth;
  tamanhoHEIGHT = windowHeight;
  
	
	MX = tamanhoWIDTH/2;
	MY = tamanhoHEIGHT/2;
  canvas = createCanvas(tamanhoWIDTH,tamanhoHEIGHT);


  frameRate(25);
  background(255, 255, 255);

  for (let i = 0; i < numeroPontos; i++) {
    NumerosArrayX[i] = tamanhoWIDTH/2;
    NumerosArrayY[i] = tamanhoHEIGHT/2;
  }

  for (let i = 0; i < numeroPontos; i++) {
    RND_NumerosArrayX[i] = tamanhoWIDTH/2;
    RND_NumerosArrayY[i] = tamanhoHEIGHT/2;
  }
}

function draw() {
  tempoApaga ++;

  if (tempoApaga>2000) {
    fill(255, 255, 255, 40);
    rect(-50, -50, tamanhoWIDTH+50, tamanhoHEIGHT+50);
    tempoApaga=0;
  }


  tempo++;
  if (mouseIsPressed) {
    MX = mouseX;
    MY = mouseY;
  } else {
    if (tempo>15) {
      MX = random (50, tamanhoWIDTH-50);
      MY = random (50, tamanhoHEIGHT-50);
      tempo=0;
    }
  }

  contaMouse ++;

  if (contaMouse < numeroPontos) {

    if  ( (MX > 40) && (MX < tamanhoWIDTH-40) ) {
      NumerosArrayX[contaMouse] = MX;
      RND_NumerosArrayX[contaMouse] = MX + int(random(-10, 10));
    }

    if  ( (MY > 40) && (MY < tamanhoHEIGHT-40) ) {
      NumerosArrayY[contaMouse] = MY;
      RND_NumerosArrayY[contaMouse] = MY + int(random(-10, 10));
    }
  } else {
    contaMouse=0;
  }

  tempoBrancoPreto++;
  if (tempoBrancoPreto>400) {
    tempoBrancoPreto=0;
  }


  if (tempoApaga==50) {
    strokeWeight(10);
  } else {
    strokeWeight(1);
  }


  if (tempoApaga==400) {
    strokeWeight(10);
  } else {
    strokeWeight(1);
  }

  for (let i = 0; i < numeroPontos; i ++) {
    if ((i>0) && (i < numeroPontos)) {
      stroke(10, 10, 10, 20);
      line(RND_NumerosArrayX[i], RND_NumerosArrayY[i], RND_NumerosArrayX[i-1], RND_NumerosArrayY[i-1]);
      if (tempoBrancoPreto<200) {
        stroke(10, 10, 10, 80);
      } else {
        stroke(255, 255, 255, 80);
      }

      line(NumerosArrayX[i], NumerosArrayY[i], NumerosArrayX[i-1], NumerosArrayY[i-1]);
    } else {
      //stroke(10,10,10,20);
      //line(RND_NumerosArrayX[i],RND_NumerosArrayY[i],tamanhoHEIGHT/2,NumerosArrayY[i-1]);
      //if (tempoBrancoPreto<200){
      //  stroke(10,10,10,80);
      //}else{
      //  stroke(255,255,255,80);
      //}
      //line(NumerosArrayX[i],NumerosArrayY[i],tamanhoHEIGHT/2,NumerosArrayY[i-1]);
    }


    NumerosArrayX[i] = NumerosArrayX[i] + int(random(-3, 3));
    NumerosArrayY[i] = NumerosArrayY[i] + int(random(-3, 3));


    RND_NumerosArrayX[i] = RND_NumerosArrayX[i] + int(random(-5, 5));
    RND_NumerosArrayY[i] = RND_NumerosArrayY[i] + int(random(-5, 5));



    if (NumerosArrayX[i]<0 || NumerosArrayX[i]>width) NumerosArrayX[i] = random(0, width);
    if (NumerosArrayY[i]<0 || NumerosArrayY[i]>height) NumerosArrayY[i] = random(0, height);

    if (RND_NumerosArrayX[i]<0 || RND_NumerosArrayX[i]>width) RND_NumerosArrayX[i] = random(0, width);
    if (RND_NumerosArrayY[i]<0 || RND_NumerosArrayY[i]>height) RND_NumerosArrayY[i] = random(0, height);
  }

  contadorTempoRefresh++;
  if (contadorTempoRefresh>1600) {
    background(255);
    contadorTempoRefresh=0;
  }
}
