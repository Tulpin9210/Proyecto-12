var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImg = loadImage("Runner-2.png", "Runner-1.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
//agregar imagen de path
path = createSprite(200,200);
path.addImage(pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.

path.scale=1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy = createSprite(200,200);
boy.addImage(boyImg);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = +4;
  // boy moviéndose en el eje X con el mouse
  if(keyDown("a"))[
    boy.X = boy.X+5
  ]
  if(keyDown("d"))[
    boy.X = boy.X-5
  ]
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 600 ){
    path.y = height/2;
  }
  preload();
  setup();
  drawSprites();
}
