/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
var keyState = {};
 //recording the keypushing to true or false
 window.addEventListener('keydown', function(e){
   keyState[e.keyCode] = true;
   },true)
 window.addEventListener('keyup', function(e){
    keyState[e.keyCode] = false;
     },true)


//creating player
 var circle = document.createElement('div');
 circle.id = 'circle';

 //creating container
 var container = document.getElementById('container');
 document.body.appendChild(container);
 container.appendChild(circle);



//*************************INITILZING********************************//

//moving variables player
var velocityX, velocityY, playerWidth, playerHeight;

//Initilization player
function initilizePlayer(velocityX, velocityY, playerHeight, playerWidth){
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.playerHeight = playerHeight;
  this.playerWidth = playerWidth;

  updateInitStyles();

};

initilizePlayer(375,225, 50, 150);




var containerWidth, containerHeight;

function initilizeContainer(containerWidth, containerHeight){
  this.containerHeight = containerHeight;
  this.containerWidth = containerWidth;

  updateInitStyles();
}

initilizeContainer(800,500);




//update Initilized Styles of container and player
function updateInitStyles(){

    circle.style.height = playerHeight + "px";
    circle.style.width = playerWidth + "px";


    container.style.height = containerHeight + "px";
    container.style.width = containerWidth + "px";

}

//**********INITILZING-END*********//





//*************************UPDATING********************************//

//wallchecking if player hits the border of the canvas
function wallChecking(){
  if(velocityX + playerWidth >= containerWidth - 1 ){
    velocityX -= 1;
  }
  if(velocityX < 0){
    velocityX += 1;
  }
  if(velocityY < 0){
    velocityY += 1;
  }
  if(velocityY + playerHeight > containerHeight - 1){
    velocityY -= 1;
  }

}

//Moving the player
function movePlayer(){
    //right
    if(keyState[39]){
      velocityX += 1;
    }//left
    if(keyState[37]){
      velocityX -= 1;
    }//down
    if(keyState[40]){
      velocityY += 1;
    }//up
    if(keyState[38]){
      velocityY -= 1;


    }
    //wallChecking
    wallChecking();

    //if not hit wall updating the velocity
    circle.style.left = velocityX + "px";
    circle.style.top = velocityY + "px";
}

//move background
var backgroundMove = 0;
function movingBackground(){
  backgroundMove--;
  container.style.backgroundPosition = backgroundMove/5 + "px";
  console.log(container);
}

//*****UPDATING-END******//





function gameLoop(){

  //updating
  movingBackground();
  movePlayer();

  //moving background

  setTimeout(gameLoop, 1);
}

gameLoop();
