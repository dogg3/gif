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





////CONTAINER

const Playground = {
  init: function(height, width){
    this.height = height;
    this.width = width;
    this.counter = 0;
    this.DOM = document.createElement('div');
    document.body.appendChild(this.DOM);
    this.DOM.id = 'container';
  },
  draw: function(){
     this.DOM.style.height = this.height + "px";
     this.DOM.style.width = this.width + "px";
  },
  move: function(){
    this.counter--;
    this.DOM.style.backgroundPosition = this.counter/5 + 'px';
  }


}


const container = Object.create(Playground);
container.init(500,800);  
















//PLAYER

//creating player
 const circle = document.createElement('div');
 circle.id = 'circle';
 container.DOM.appendChild(circle);
 


//moving variables player
var velocityX, velocityY, playerWidth, playerHeight;

//Initilization player
function initilizePlayer(velocityX, velocityY, playerHeight, playerWidth){
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.playerHeight = playerHeight;
  this.playerWidth = playerWidth;

circle.style.height = this.playerHeight + "px";
circle.style.width = this.playerWidth + "px";

circle.style.left = (this.velocityX ) + "px";
circle.style.top = (this.velocityY  )+ "px";
   


};

const Player = {
  init: function(velocityX, velocityY,height,width){
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.height = height;
      this.width = width;
      this.DOM = document.createElement('div');
      document.body.appendChild(this.DOM);
      this.DOM.id = 'circle';
  },
  draw: function(){
     this.DOM.style.height = this.height + "px";
     this.DOM.style.width = this.width + "px";
     this.DOM.style.left = (this.velocityX ) + "px";
    this.DOM.style.top = (this.velocityY  )+ "px";
  },


}


const player1 = Object.create(Player);
player1.init(375,225, 80, 190);
player1.draw();




initilizePlayer(375,225, 80, 190);


//wallchecking if player hits the border of the canvas
function wallChecking(){

  if(velocityX + playerWidth >= container.width - 1 ){
    velocityX -= 1;
  }
  if(velocityX < 0){
    velocityX += 1;
  }
  if(velocityY < 0){
    velocityY += 1;
  }
  if(velocityY + playerHeight > container.height - 1){
    velocityY -= 1;
  }

}

//Moving the player
function movePlayer(){
    //right
    if(keyState[39]){
      velocityX += 0.4;

    }//left
    if(keyState[37]){
      velocityX -= 0.8;
    }//down
    if(keyState[40]){
      velocityY += 0.7;
    }//up
    if(keyState[38]){
      velocityY -= 0.7;

    }

    //wallChecking
    wallChecking();

    //if not hit wall updating the velocity
    circle.style.left = (velocityX ) + "px";
    circle.style.top = (velocityY  )+ "px";
}















//*************************UPDATING********************************//






//CREATE SHOTS WHEN PRESSING SPACE

//to give each shot an unique ID
var shotNumber = 0;
var isShotFired = false;
//save the ID and positions of every shot
var shotVelocity= new Array();

  function createShots(){
    shotNumber++;
    shotVelocity[shotNumber] = new Array(3);
    shotVelocity[shotNumber][0] = document.createElement("div");
    document.getElementById('circle').appendChild(shotVelocity[shotNumber][0]);
    shotVelocity[shotNumber][0].id = shotNumber;

    //Placing every new shot as the first child
    var theShotBefore = document.getElementById(shotNumber-1);
    document.getElementById('container').insertBefore(shotVelocity[shotNumber][0], theShotBefore);
    shotVelocity[shotNumber][0].className = 'shot';

    //Save the positions of the player as the initial velocities in the shot

    shotVelocity[shotNumber][1] = velocityX+182;
    shotVelocity[shotNumber][2] = velocityY+50;

    //Apply the initial velocities
    shotVelocity[shotNumber][0].style.left = shotVelocity[shotNumber][1] + "px";
    shotVelocity[shotNumber][0].style.top = shotVelocity[shotNumber][2] + "px";

    //Just move shots when there exists shots
    isShotFired = true;

  }
//move playerShots
function moveAllShots(){
  if(isShotFired){
    for(i=1; i<shotVelocity.length; i++){
        if(shotVelocity[i][1]<800){
            shotVelocity[i][0].style.left = shotVelocity[i][1]++ + "px";
          }
        }
      }
  //Loop every 1/10 second to see if there is any shots
  setTimeout(moveAllShots,1);
}
moveAllShots();




//updating all moving shots
updateMovingShots();
function updateMovingShots(){
  if(keyState[32]){
createShots();

  }
  setTimeout(updateMovingShots,250);
}







//*****UPDATING-END******//




function gameLoop(){

  container.draw();
  container.move();
  //updating

  movePlayer();





  //moving background

  setTimeout(gameLoop, 1);
}

gameLoop();
