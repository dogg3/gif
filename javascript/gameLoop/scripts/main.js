/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

//creating circle;
 var circle = document.createElement('div');
 circle.id = 'circle';
 var container = document.getElementById('container');
 container.appendChild(circle);


var keyState = {};

window.addEventListener('keydown', function(e){

    keyState[e.keyCode] = true;
    console.log(keyState);
  },true)

window.addEventListener('keyup', function(e){

  keyState[e.keyCode] = false;
  console.log(keyState);
},true)



var velocityX = 0;
var velocityY = 0;
function gameLoop(){

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

  document.getElementById('circle').style.left = velocityX + "px";
  document.getElementById('circle').style.top = velocityY + "px";
  setTimeout(gameLoop, 1);
}

gameLoop();
