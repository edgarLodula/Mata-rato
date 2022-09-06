
var bk, cake,cake_img;
var boy, boy_img, boy_shot, boy_fail;
var morc_voa, bart, rat;

function preload(){ // função que carregar todas as imagens e animações
  bk = loadImage("assets/bk3.jpg");
  cake_img=loadImage("assets/cake3.png");
  boy_img=loadAnimation("assets/p1.png","assets/p2.png","assets/p3.png");
  boy_shot=loadAnimation("assets/p4.png","assets/p5.png","assets/p6.png");
  boy_fail=loadAnimation("assets/p7.png","assets/p8.png","assets/p9.png");
  boy_fail.looping= false;
  boy_shot.looping= false;
  boy_img.looping= false;

  morc_voa=loadAnimation("assets/m1.png","assets/m2.png","assets/m3.png","assets/m4.png");
  bart=loadAnimation("assets/b1.png","assets/b2.png","assets/b3.png");
  rat=loadAnimation("assets/r1.png","assets/r2.png","assets/r3.png","assets/r4.png","assets/r5.png","assets/r6.png","assets/r7.png");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,400);
  
}

function draw(){
  background(bk);
  drawSprites(); 

  text(mouseX+","+mouseY, mouseX, mouseY);
}

