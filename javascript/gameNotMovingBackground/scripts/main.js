/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

 var circle = document.createElement('div');
 circle.id = 'circle';
 var container = document.getElementById('container');
 container.appendChild(circle);

//height of container
var heightContainer = document.getElementById('container').clientHeight;
var widthContainer = document.getElementById('container').clientWidth;
var widthAimation = document.getElementById('circle').clientWidth;
var heightAnimation = document.getElementById('circle').clientHeight;


 //default position of circle
var posVertical = (widthContainer /2) - (widthAimation /2);
  circle.style.left = posVertical + 'px';
var posHorizontal = (heightContainer /2) - (heightAnimation /2);
  circle.style.top = posHorizontal + 'px';


//default position of container
var backgroundPositionOffsetVerical = 0;
var backgroundPosition = backgroundPositionOffsetVerical + "px" + " -" + heightContainer + "px";
console.log(backgroundPosition);
container.style.backgroundPosition = backgroundPosition;




//ANIMATIONS WITH ARROWS ON KEYBOARD
document.onkeydown = function(e) {

    switch (e.keyCode) {

      //right
      case 39:
          backgroundPositionOffsetVerical -= 5;
          container.style.backgroundPosition = backgroundPositionOffsetVerical + "px" + " -" + heightContainer + "px";;
          posVertical += 4;
          circle.style.left = posVertical + 'px';

          console.log(posVertical);
          break;
      //left
        case 37:
            posVertical -= 4;
            circle.style.left = posVertical + 'px';
            console.log(posVertical);
            break;

        //up
        case 38:
            posHorizontal -= 4;
            circle.style.top = posHorizontal + 'px';
            console.log(posHorizontal);
            break;

        //down
        case 40:
            posHorizontal += 4;
            circle.style.top = posHorizontal + 'px';
            console.log(posHorizontal);
            break;

    }
};


//cra






//annimation
//var id = setInterval(frame, 5);
//var pos = 0;
//function frame(){
//  if(pos == 350){
  //  clearInterval(id);
//  }else {
  //  pos++;
//   circle1.style.left = pos + 'px';
//  }
//}


//adding a new circle1
