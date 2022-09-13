
var bk, cake,cake_img;
var boy, boy_img, boy_shot, boy_fail;
var morc_voa, bart, rat;
var cake;
var boy;
var life=3;
var inseto;
var estado="jogar"
var sandalia;
var chinelo;
var ponto=0
var button,button_img;
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

  sandalia=loadImage("assets/sand.png")
  button_img=loadImage("assets/restart_button.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,400);
  cake=createSprite(83,345,40,40)
  cake.addImage("bolo",cake_img)
  cake.scale=0.2
  boy=createSprite(140,280,40,40)
  boy.addAnimation("garoto",boy_img)
  boy.addAnimation("garoto2",boy_shot)
  boy.addAnimation("garoto3",boy_fail)
  boy.scale=2
  inseto= new Group()
  chinelo= new Group()
  button=createSprite(300,130,10,10)
  button.addImage("botao",button_img)
  button.scale=0.2
}
function draw(){
  background(bk);
  if(estado==="jogar"){
          inimigos();
      control();
      for(var i=0; i<life;i++){
        circle(470+(i*50),70,50)
        image(cake_img,450+(i*50),46,40,40)
      }
      if(inseto.isTouching(cake)){
        inseto.destroyEach()
        boy.changeAnimation("garoto3",boy_fail)
        boy.scale=1.5
      life--
    cake.visible=false
    ponto=0
    setTimeout(() => {
      boy.changeAnimation("garoto",boy_img)
      boy.scale=2
      cake.visible=true
    }, 900);
    }
      chinelo.overlap(inseto,function(coletor,coletado){
        coletado.remove()
        ponto=ponto+1
    })
    text("placar: "+ponto,300,17)
    button.visible=false
  }
  else if(estado==="fim"){
    inseto.destroyEach();
    cake.visible=false
    boy.changeAnimation("garoto3",boy_fail)
    boy.x=300
    boy.y=280
    button.visible=true
    if(mousePressedOver(button)){
      estado="jogar"
      cake.visible=true
      boy.changeAnimation("garoto",boy_img)
    }
  } 
 
  drawSprites(); 
  fill("black")
  text(mouseX+","+mouseY, mouseX, mouseY);
}

function inimigos(){

  if(frameCount%(60-(ponto*2))===0){
    var animal
    animal=createSprite(620,340,40,40)
    animal.velocityX=-(5+ponto)
   var number=Math.round(random(1,3))
   switch (number) {
    case 1:animal.addAnimation("bat",morc_voa)
      
      break;
   case 2:animal.addAnimation("barata",bart)
   
   break;

    case 3: animal.addAnimation("rato",rat)

    break;
   }
   animal.lifetime=200
   inseto.add(animal)
  }
}
function control(){
  if(keyDown("space")){
    boy.changeAnimation("garoto2",boy_shot)
    boy.scale=1.5
    setTimeout(() => {
      boy.changeAnimation("garoto",boy_img)
      boy.scale=2
    }, 900);
    Lancamento();
  }
  if(life===0){
    estado="fim"
  }
}
function Lancamento(){
var sand= createSprite(boy.x,boy.y,10,10)
sand.addImage("sandalha",sandalia)
sand.scale=0.2
sand.velocityX=5
sand.velocityY=6
chinelo.add(sand);
sand.lifetime=45
}