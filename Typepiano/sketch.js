var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,bgm,
tune,C,F,c11,c21,c41,c51,c61,c81,c91,c111,c121;
var qy,wy,ey,ry,ty,yy,uy,iy,oy,py,Lby,Rby;
var yRect = [];
var speed =[];
var a;
var keyMap = [113,119,101,114,116,121,117,105,111,112,91,93];
var keyMap1=[81,87,69,82,84,89,85,73,79,80,219,221];
var pg;
var balls = [];
var X = "q";
var Q = 0;
var M = 0;
var Size = 100;
var rpx;
var canvas;
var W1 = 11.75*windowWidth/40;
var E1 = 13.75*windowWidth/40;
var R1 = 15.75*windowWidth/40;
var T1 = 17.75*windowWidth/40;
var Y1 = 19.75*windowWidth/40;
var U1 = 21.75*windowWidth/40;
var I1 = 23.75*windowWidth/40;
var O1 = 25.75*windowWidth/40;
var P1 = 27.75*windowWidth/40;
var K1 = 29.75*windowWidth/40;
var L1 = 31.75*windowWidth/40;
var Q1 = 9.75*windowWidth/40;
function preload(){
  c1=loadSound('pianonotes/31!.mp3');
  c1a=loadSound('pianonotes/plus/31plus.mp3');
  c2=loadSound('pianonotes/32!.mp3');
  c2a=loadSound('pianonotes/plus/32plus.mp3');
  c3=loadSound('pianonotes/33!.mp3');
  c4=loadSound('pianonotes/34!.mp3');
  c4a=loadSound('pianonotes/plus/34plus.mp3');
  c5=loadSound('pianonotes/35!.mp3');
  c5a=loadSound('pianonotes/plus/35plus.mp3');
  c6=loadSound('pianonotes/36!.mp3');
  c6a=loadSound('pianonotes/plus/36plus.mp3');
  c7=loadSound('pianonotes/37!.mp3');
  c8=loadSound('pianonotes/41!.mp3');
  c8a=loadSound('pianonotes/plus/41plus.mp3');
  c9=loadSound('pianonotes/42!.mp3');
  c9a=loadSound('pianonotes/plus/42plus.mp3');
  c10=loadSound('pianonotes/43!.mp3');
  c11=loadSound('pianonotes/44!.mp3');
  c11a=loadSound('pianonotes/plus/44plus.mp3');
  c12=loadSound('pianonotes/45!.mp3');
  c12a=loadSound('pianonotes/plus/45plus.mp3');
  bgm=loadSound('pianonotes/bg.mp3');
  tune=1;
  fontM = loadFont("font/MunroSmall.ttf");
}

function setup() {

  canvas = createCanvas(windowWidth,windowHeight);
  
  canvas.style('z-index','-1');
  canvas.position(0,0);
  //osc = new p5.TriOsc(); // set frequency and type
    //osc.amp(.5);
    //osc.start();
    //bgm.loop();
    q=255;
    w=255;
    e=255;
    r=255;
    t=255;
    y=255;
    u=255;
    i=255;
    o=255;
    p=255;
    Lb=255;
    Rb=255;
    tuneChange=255;
    tune = 1;
    tuneName="Normal";
    xt=windowWidth/11;
    yt=(4*windowHeight)/5;
    size=45;
    pg = createGraphics(windowWidth,windowHeight);
  
  
    for (a = 0; a < 12; a++) {
    speed[a] = 0;
    yRect[a]= 2.1*windowHeight/3+speed[a];
    }
  rpx = 19.75*windowWidth/40;
   
}	

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw() {

    background(88,6,140);
    stroke(255);

  push();
    fill(q);
      rect(9.75*windowWidth/40,yRect[0], 50, 20);
       textSize(50);
      fill(q);
      textFont(fontM);
      text("Q",9.75*windowWidth/40,2.44*windowHeight/3);
    pop();

  push();
    fill(w);
      rect(11.75*windowWidth/40,yRect[1] , 50, 20);
        textSize(50);
      fill(w);
      textFont(fontM);
      text("W",11.75*windowWidth/40,2.44*windowHeight/3);
  pop();
  
  push();  
      fill(e);
      rect(13.75*windowWidth/40,yRect[2], 50, 20);
        textSize(50);
      fill(e);
      textFont(fontM);
      text("E",13.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(r);
      rect(15.75*windowWidth/40,yRect[3], 50, 20);
        textSize(50);
      fill(r);
      textFont(fontM);
      text("R",15.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(t);
      rect(17.75*windowWidth/40, yRect[4], 50, 20);
        textSize(50);
      fill(t);
      textFont(fontM);
      text("T",17.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(y);
      rect(19.75*windowWidth/40,yRect[5], 50, 20);
        textSize(50);
      fill(y);
      textFont(fontM);
      text("Y",19.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(u);
      rect(21.75*windowWidth/40,yRect[6], 50, 20);
        textSize(50);
      fill(u);
      textFont(fontM);
      text("U",21.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(i);
      rect(23.75*windowWidth/40,yRect[7], 50, 20);
        textSize(50);
      fill(i);
      textFont(fontM);
      text("I",23.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(o);
      rect(25.75*windowWidth/40,yRect[8], 50, 20);
        textSize(50);
      fill(o);
      textFont(fontM);
      text("O",25.75*windowWidth/40,2.44*windowHeight/3);
    pop();

     push();  
      fill(p);
      rect(27.75*windowWidth/40,yRect[9], 50, 20);
        textSize(50);
      fill(p);
      textFont(fontM);
      text("P",27.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(Lb);
      rect(29.75*windowWidth/40,yRect[10], 50, 20);
        textSize(50);
      fill(Lb);
      textFont(fontM);
      text("{",29.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();  
      fill(Rb);
      rect(31.75*windowWidth/40,yRect[11], 50, 20);
        textSize(50);
      fill(Rb);
      textFont(fontM);
      text("}",31.75*windowWidth/40,2.44*windowHeight/3);
    pop();

    push();
      stroke(tuneChange);
      fill(tuneChange);
      rect(1.6*windowWidth/20,1.7*windowHeight/3,6*windowWidth/40,windowHeight/4);
      pop();

      push();
      textSize(size);
      fill(88,6,140);
      textFont(fontM);
      text(tuneName, xt, yt);
      pop();

        push();
  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
  }
   pop();
   

      push();
      if (keyIsPressed){
        //console.log(1)
      for (let i = 0; i < keyMap.length; i++) {
        if(keyMap[i]===keyCode){
          speed[i]=0.86*speed[i];
          yRect[i] += speed[i];

      }
    }
  }
      else{
       for (let i = 0; i < keyMap.length; i++) {
          console.log(keyCode);
        if(keyMap1[i]===keyCode){
          if(yRect[i]<350){  
            speed[i]=10*speed[i];
            yRect[i] = 2.1*windowHeight/3;
        }
        else{
          speed[i]=0;
          yRect[i]=2.1*windowHeight/3;
        }
      }
    }
  }
  pop();
  push();
  // text(X,windowWidth/2,windowHeight/2);
  // fill(255,255,255);
  // textSize(Size); 

  fill(255,255,255);
  rect(rpx,2*windowHeight/3,50,50);
pop();

 




}
function keyPressed() {

  if (tune===1){//以下是C大调的音符
    console.log(tune);
  if (keyCode===81) {
    speed[0]=-30;
    c1.play();
   var b = new Ball();
  b.x = 9.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
    }
  if (keyCode===87){
    speed[1]=-30;
    c2.play();
     var b = new Ball();
  b.x = 11.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);    
    }
  if (keyCode===69){
    speed[2]=-30;
  	c3.play();
     var b = new Ball();
  b.x = 13.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===82){
    speed[3]=-30;
  	c4.play();
     var b = new Ball();
  b.x = 15.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===84){
  	speed[4]=-30;
    c5.play();
     var b = new Ball();
  b.x = 17.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===89){
    speed[5]=-30;
    c6.play();
     var b = new Ball();
  b.x = 19.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===85){
  	speed[6]=-30;
    c7.play();
     var b = new Ball();
  b.x = 21.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===73){
  	speed[7]=-30;
    c8.play();
     var b = new Ball();
  b.x = 23.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===79){
    speed[8]=-30;
    c9.play();
     var b = new Ball();
  b.x = 25.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===80){
    speed[9]=-30;
    c10.play();
     var b = new Ball();
  b.x = 27.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===219){
    speed[10]=-30;
    c11.play();
     var b = new Ball();
  b.x = 29.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===221){
    speed[11]=-30;
    c12.play();
     var b = new Ball();
  b.x = 31.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
}



  else if (tune===2) {//以下是E大调的音符
    console.log(tune);
    if (keyCode===81) {
    speed[0]=-30;
    c1a.play();
     var b = new Ball();
  b.x = 9.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
    }
  if (keyCode===87){
    speed[1]=-30;
    c2a.play();
     var b = new Ball();
  b.x = 11.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
    } 
  if (keyCode===69){
    speed[2]=-30;
    c3.play();
     var b = new Ball();
  b.x = 13.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===82){
    speed[3]=-30;
    c4a.play();
     var b = new Ball();
  b.x = 15.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===84){
    speed[4]=-30;
    c5a.play();
     var b = new Ball();
  b.x = 17.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===89){
    speed[5]=-30;
    c6.play();
     var b = new Ball();
  b.x = 19.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===85){
    speed[6]=-30;
    c7.play();
     var b = new Ball();
  b.x = 21.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===73){
    speed[7]=-30;
    c8a.play();
     var b = new Ball();
  b.x = 23.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===79){
    speed[8]=-30;
    c9a.play();
     var b = new Ball();
  b.x = 25.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===80){
    speed[9]=-30;
    c10.play();
     var b = new Ball();
  b.x = 27.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===219){
    speed[10]=-30;
    c11a.play();
     var b = new Ball();
  b.x = 29.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  if (keyCode===221){
    speed[11]=-30;
    c12a.play();
     var b = new Ball();
  b.x = 31.75*windowWidth/40;
  b.y = 300;
  b.speed = -0.5;
  b.width = 50;
  b.height = 20;
  b.fill = color(255, 255, 255);
  balls.push(b);
  }
  }

  if (keyCode===32){
    if (tune===2){
    tuneName="Normal";
    xt=windowWidth/11;
    yt=(4*windowHeight)/5;
    size=45;
    tune=1
  }
    else {
     tuneName="Melancholy";
        xt=windowWidth/11;
    yt=(4*windowHeight)/5;
     size=32;
     tune=2; 
    }
  }
}

// function Ball(){
//   this.x;
//   this.y;
//   this.velocity;
//   this.fill;
//   this.d;

//   this.display = function(){
//     stroke(255);
//     fill(this.fill);
//     ellipse(this.x,this.y,this.d,this,d);

//     this.y = this.y +this.speed;
    

//   }
// }

var W1 = 11.75*windowWidth/40;
var E1 = 13.75*windowWidth/40;
var R1 = 15.75*windowWidth/40;
var T1 = 17.75*windowWidth/40;
var Y1 = 19.75*windowWidth/40;
var U1 = 21.75*windowWidth/40;
var I1 = 23.75*windowWidth/40;
var O1 = 25.75*windowWidth/40;
var P1 = 27.75*windowWidth/40;
var K1 = 29.75*windowWidth/40;
var L1 = 31.75*windowWidth/40;
var Q1 = 9.75*windowWidth/40;
// -----------------------------------
// -----------------------------------
// function keyY(){
//   M = 1;
//   rpx = Y1;
// }
// function keyU(){
//   M = 2;
//   rpx = U1;
// }
// function keyI(){
//   M = 3;
//   rpx = I1;
// }
// function keyU(){
//   M = 4;
//   rpx = U1;
// }
// function keyI(){
//   M = 5;
//   rpx = I1;
// }
// function keyP(){
//   M = 6;
//   rpx = P1;
// }
// function keyU(){
//   M = 7;
//   rpx = U1
// }
// ------------------------------
// -------------------------------
// function keyQ(){
//   // X = "w";
//   // M = 1;
//  rpx = 11.75*windowWidth/40;
//     console.log("key a is pressed");
// }
// function keyW(){
//     // X = "e";
//     // M = 2;
//     rpx = 13.75*windowWidth/40;
// }     
// function keyE(){
//     // X = "r";
//     // M = 3;
//     rpx = 15.75*windowWidth/40;
// }
// function keyR(){
//   // X = "t";
//     // M = 4;
//     rpx = 17.75*windowWidth/40;
// }
// function keyT(){
//   // X = "y";
//     // M = 5;
//     rpx = 19.75*windowWidth/40;
// }
// function keyY(){
//   // X = "u";
//     // M = 6;
//     rpx = 21.75*windowWidth/40;
// }
// function keyU(){
//   // X = "i";
//     // M = 7;
//     rpx = 23.75*windowWidth/40;
// }
// function keyI(){
//     // X = "o";
//     // M = 8;
//     rpx = 25.75*windowWidth/40;
// }
// function keyO(){
//     // X = "p";
//     // M = 9;
//     rpx = 27.75*windowWidth/40;
// }
// function keyP(){
//   // X = "{";
//   // M = 10;
//   rpx = 29.75*windowWidth/40;
// }
// function keyK(){
//   // X = "}";
//   // M = 11;
//   rpx = 31.75*windowWidth/40;
// }
// function keyL(){
//   // X = "q";
//   // M = 0;
//   rpx = 9.75*windowWidth/40;
// }

//-------------1-----------------
function keyTyped(){
  if (key === 'y' && M === 0){
    setTimeout(keyY11,400);
    
  }
  if (key === 'u' && M === 1){
    setTimeout(keyU11,400);
   
  }
  if (key === 'i' && M === 2){
    setTimeout(keyI11,1200);
   
  }
  if (key === 'u' && M === 3){
    setTimeout(keyU12,200);
    
  }
  if (key === 'i' && M === 4){
    setTimeout(keyI12,800);
   
  }
  if (key === 'p' && M === 5){
    setTimeout(keyP11,800);
    
  }
  if (key === 'u' && M === 6){
    setTimeout(keyU13,2000);
    
  }
//--------------2----------------
  if (key === 'e' && M === 7){
    setTimeout(keyE21,400);
  }
  if (key === 'e' && M === 8){
    setTimeout(keyE22,400);
  }
  if (key === 'y' && M === 9){
    setTimeout(keyY21,1200);
  }
  if (key === 't' && M === 10){
    setTimeout(keyT21,200);
  }
  if (key === 'y' && M === 11){
    setTimeout(keyY22,800);
  }
  if (key === 'i' && M === 12){
    setTimeout(keyI21,800);
  }
  if (key === 't' && M === 13){
    setTimeout(keyT22,2000);
  }
//-----------3---------------------
  if (key === 'w' && M === 14){
    setTimeout(keyW31,400);
  }
  if (key === 'e' && M ===15){
    setTimeout(keyE31,400);
  }
  if (key === 'r' && M ===16){
    setTimeout(keyR31,1200);
  }
  if (key === 'e' && M ===17){
    setTimeout(keyE32,200);
  }
  if (key === 'r' && M ===18){
    setTimeout(keyR32,800);
  }
  if (key === 'i' && M ===19){
    setTimeout(keyI31,800);
  }
  if (key === 'e' && M ===20){
    setTimeout(keyE33,2000);
  }
//----------4-----------------------
  if (key === 'i' && M ===21){
    setTimeout(keyI41,400);
  }
  if (key === 'i' && M ===22){
    setTimeout(keyI42,400);
  }
  if (key === 'u' && M ===23){
    setTimeout(keyU41,1200);
  }
  if (key === 'e' && M ===24){
    setTimeout(keyE41,200);
  }
  if (key === 'e' && M ===25){
    setTimeout(keyE42,800);
  }
  if (key === 'u' && M ===26){
    setTimeout(keyU42,800);
  }
  if (key === 'u' && M ===27){
    setTimeout(keyU43,1200);
  }
//-----------5---------------------
  if (key === 'y' && M ===28){
    setTimeout(keyY51,400);
  }  
  if (key === 'u' && M ===29){
    setTimeout(keyU51,400);
  }
  if (key === 'i' && M ===30){
    setTimeout(keyI51,1200);
  }
  if (key === 'u' && M ===31){
    setTimeout(keyU52,200);
  }
  if (key === 'i' && M ===32){
    setTimeout(keyI52,800);
  }
  if (key === 'p' && M ===33){
    setTimeout(keyP51,800);
  }
  if (key === 'u' && M ===34){
    setTimeout(keyU53,2000);
  }
//------------6--------------------
  if (key === 'e' && M ===35){
    setTimeout(keyE61,400);
  }
  if (key === 'e' && M ===36){
    setTimeout(keyE62,400);
  }
  if (key === 'y' && M ===37){
    setTimeout(keyY61,1200);
  }
  if (key === 't' && M ===38){
    setTimeout(keyT61,200);
  }
  if (key === 'y' && M ===39){
    setTimeout(keyY62,800);
  }
  if (key === 'i' && M ===40){
    setTimeout(keyI61,800);
  }
  if (key === 't' && M ===41){
    setTimeout(keyT62,2000);
  }
//-------------7-----------
  if (key === 'w' && M ===42){
    setTimeout(keyW71,400);
  }
  if (key === 'e' && M ===43){
    setTimeout(keyE71,400);
  }
  if (key === 'r' && M ===44){
    setTimeout(keyR71,1200);
  }
  if (key === 'e' && M ===45){
    setTimeout(keyE72,200);
  }
  if (key === 'r' && M ===46){
    setTimeout(keyR72,800);
  }
  if (key === 'u' && M ===47){
    setTimeout(keyU71,400);
  }
  if (key === 'i' && M ===48){
    setTimeout(keyI71,400);
  }
  if (key === 'o' && M ===49){
    setTimeout(keyO71,200);
  }
  if (key === 'o' && M ===50){
    setTimeout(keyO72,800);
  }
  if (key === 'p' && M ===51){
    setTimeout(keyP71,200);
  }
  if (key === 'i' && M ===52){
    setTimeout(keyI72,800);
  }
//------------8----------------  
  if (key === 'y' && M ===53){
    setTimeout(keyY81,400);
  }
  if (key === 'u' && M ===54){
    setTimeout(keyU81,400);
  }
  if (key === 'i' && M ===55){
    setTimeout(keyI81,1200);
  }
  if (key === 'y' && M ===56){
    setTimeout(keyY82,200);
  }
  if (key === 'u' && M ===57){
    setTimeout(keyU82,800);
  }
  if (key === 't' && M ===58){
    setTimeout(keyT81,800);
  }
  if (key === 'y' && M ===59){
    setTimeout(keyY83,2000);
  }

}
//----------1---------------
function keyY11(){
  rpx = 21.75*windowWidth/40;;
  M = 1;
}
function keyU11(){
  rpx = 23.75*windowWidth/40;;
  M = 2;
}
function keyI11(){
  rpx = 21.75*windowWidth/40;
  M = 3;
}
function keyU12(){
  rpx = 23.75*windowWidth/40;
  M = 4;
}
function keyI12(){
  rpx = 27.75*windowWidth/40;
  M = 5;
}
function keyP11(){
  rpx = 21.75*windowWidth/40;
  M = 6;
}
function keyU13(){
  rpx = 13.75*windowWidth/40;
  M = 7;
}
//---------------2-----------------
function keyE21(){
  rpx = 13.75*windowWidth/40;;
  M = 8;
}
function keyE22(){
  rpx = 19.75*windowWidth/40;;
  M = 9;
}
function keyY21(){
  rpx = 17.75*windowWidth/40;;
  M = 10;
}
function keyT21(){
  rpx = 19.75*windowWidth/40;;
  M = 11;
}
function keyY22(){
  rpx = 23.75*windowWidth/40;;
  M = 12;
}
function keyI21(){
  rpx = 17.75*windowWidth/40;;
  M = 13;
}
function keyT22(){
  rpx = 11.75*windowWidth/40;;
  M = 14;
}
//------------3----------------
function keyW31(){
  rpx = 13.75*windowWidth/40;
  M = 15;
}
function keyE31(){
  rpx = 15.75*windowWidth/40;
  M = 16;
}
function keyR31(){
  rpx = 13.75*windowWidth/40;
  M = 17;
}
function keyE32(){
  rpx = 15.75*windowWidth/40;
  M = 18;
}
function keyR32(){
  rpx = 23.75*windowWidth/40;
  M = 19;
}
function keyI31(){
  rpx = 13.75*windowWidth/40;
  M = 20;
}
function keyE33(){
  rpx = 23.75*windowWidth/40;
  M = 21;
}
//----------4----------------
function keyI41(){
  rpx = 23.75*windowWidth/40;
  M = 22;
}
function keyI42(){
  rpx = 21.75*windowWidth/40;
  M = 23;
}
function keyU41(){
  rpx = 13.75*windowWidth/40;
  M = 24;
}
function keyE41(){
  rpx = 13.75*windowWidth/40;
  M = 25;
}
function keyE42(){
  rpx = 21.75*windowWidth/40;
  M = 26;
}
function keyU42(){
  rpx = 21.75*windowWidth/40;
  M = 27;
}
function keyU43(){
  rpx = 19.75*windowWidth/40;
  M = 28;
}
//---------5----------------
function keyY51(){
  rpx = 21.75*windowWidth/40;
  M = 29;
}
function keyU51(){
  rpx = 23.75*windowWidth/40;
  M = 30;
}
function keyI51(){
  rpx = 21.75*windowWidth/40;
  M = 31;
}
function keyU52(){
  rpx = 23.75*windowWidth/40;
  M = 32;
}
function keyI52(){
  rpx = 27.75*windowWidth/40;
  M = 33;
}
function keyP51(){
  rpx = 21.75*windowWidth/40;
  M = 34;
}
function keyU53(){
  rpx = 13.75*windowWidth/40;
  M = 35;
}
//------------6---------------
function keyE61(){
  rpx = 13.75*windowWidth/40;
  M = 36;
}
function keyE62(){
  rpx = 19.75*windowWidth/40;
  M = 37;
}
function keyY61(){
  rpx = 17.75*windowWidth/40;
  M = 38;
}
function keyT61(){
  rpx = 19.75*windowWidth/40;
  M = 39;
}
function keyY62(){
  rpx = 23.75*windowWidth/40;
  M = 40;
}
function keyI61(){
  rpx = 17.75*windowWidth/40;
  M = 41;
}
function keyT62(){
  rpx = 11.75*windowWidth/40;
  M = 42;
}
//--------------7------------------
function keyW71(){
  rpx = 13.75*windowWidth/40;
  M = 43;
}
function keyE71(){
  rpx = 15.75*windowWidth/40;
  M = 44;
}
function keyR71(){
  rpx = 13.75*windowWidth/40;
  M = 45;
}
function keyE72(){
  rpx = 15.75*windowWidth/40;
  M = 46;
}
function keyR72(){
  rpx = 21.75*windowWidth/40;
  M = 47;
}
function keyU71(){
  rpx = 23.75*windowWidth/40;
  M = 48;
}
function keyI71(){
  rpx = 25.75*windowWidth/40;
  M = 49;
}
function keyO71(){
  rpx = 25.75*windowWidth/40;
  M = 50;
}
function keyO72(){
  rpx = 27.75*windowWidth/40;
  M = 51;
}
function keyP71(){
  rpx = 23.75*windowWidth/40;
  M = 52;
}
function keyI72(){
  rpx = 19.75*windowWidth/40;
  M = 53
}
//------------8---------------
function keyY81(){
  rpx = 21.75*windowWidth/40;
  M = 54;
}
function keyU81(){
  rpx = 23.75*windowWidth/40;
  M = 55;
}
function keyI81(){
  rpx = 19.75*windowWidth/40;
  M = 56;
}
function keyY82(){
  rpx = 21.75*windowWidth/40;
  M = 57;
}
function keyU82(){
  rpx = 17.75*windowWidth/40;
  M = 58;
}
function keyT81(){
  rpx = 19.75*windowWidth/40;
  M = 59;
}
function keyY83(){
  rpx = 19.75*windowWidth/40;
  M = 0;
}






// function keyTyped(){  
//   console.log("key is pressed");
//   if (key === 'q' && M === 0){ 
//     setTimeout(keyQ,500);

      
//   }
    
    
//     if (key === 'w' && M === 1){
//       // X = "d";
//       // M = 2;
//       setTimeout(keyW,500);
      
          
//     }
//     if (key === 'e' && M === 2){
//       // X = "f";
//       // M = 3;     
//       setTimeout(keyE,500);
//     }
//     if (key === 'r' && M === 3){
//       // X = "g";
//       // M = 4;
//       setTimeout(keyR,500);
//     }
//     if (key === 't' && M === 4){
//       // X = "h";
//       // M = 5;
//       setTimeout(keyT,500);
//     }
//     if (key === 'y' && M === 5){
//       // X = "j";
//       // M = 6;
//       setTimeout(keyY,500);
//     }
//     if (key === 'u' && M === 6){
//       // X = "k";
//       // M = 7;
//       setTimeout(keyU,500);
//     }
//     if (key === 'i' && M === 7){
//       // X = "l";
//       // M = 8;
//       setTimeout(keyI,500);
//     }
//     if (key === 'o' && M === 8){
//       // X = "a";
//       // M = 0;
//       setTimeout(keyO,500);
//     }
//     if (key === 'p' && M === 9){
//       setTimeout(keyP,500);
//     }
//     if (key === '[' && M === 10){
//       setTimeout(keyK,500);
//     }
//     if (key === ']' && M === 11){
//       setTimeout(keyL,500);
//     }

// }

function Ball() {
  this.x;
  this.y;
  this.speed;
  this.fill;
  this.width;
  this.height;

  this.display = function() {
    stroke(255);
    fill(this.fill);
    rect(this.x, this.y, this.width, this.height);

    this.y = this.y + this.speed;

  
  }
}