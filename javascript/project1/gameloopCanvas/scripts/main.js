/**
 * index.js
 * - All our useful JS goes here, awesome!
 */


//creating circle;
 var circle = document.createElement('div');
 circle.id = 'circle';
 var container = document.getElementById('container');
 document.body.appendChild(container);
 container.appendChild(circle);





var velocityX, velocityY, playerWidth, playerHeight, containerWidth;
var keyState = {};



//Initilization
function initilize(velocityX, velocityY, containerHeight, containerWidth, playerHeight, playerWidth){
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.containerHeight = containerHeight;
  this.containerWidth = containerWidth;
  this.playerHeight = playerHeight;
  this.playerWidth = playerWidth;

  updateInitStyles();

};



//updateInitStyles
function updateInitStyles(){

    circle.style.height = playerHeight + "px";
    circle.style.width = playerWidth + "px";
    container.style.height = containerHeight + "px";
    container.style.width = containerWidth + "px";

}





window.addEventListener('keydown', function(e){
  keyState[e.keyCode] = true;
  },true)
window.addEventListener('keyup', function(e){
   keyState[e.keyCode] = false;
    },true)


//wallchecking
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

function move(){
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
    console.log(velocityY - playerHeight);
    console.log(containerHeight);
      //wallChecking
    wallChecking();



    circle.style.left = velocityX + "px";
    circle.style.top = velocityY + "px";
}






//here is the game going

initilize(0,0,500,800, 50, 50);

function gameLoop(){

  move();

  setTimeout(gameLoop, 1);
}

gameLoop();
