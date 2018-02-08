/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

//creating circle;
 var circle = document.createElement('div');
 circle.id = 'circle';
 var container = document.getElementById('container');
 container.appendChild(circle);

//height and width of container
var heightContainer = document.getElementById('container').clientHeight;
var widthContainer = document.getElementById('container').clientWidth;
var widthAimation = document.getElementById('circle').clientWidth;
var heightAnimation = document.getElementById('circle').clientHeight;


 //default position of circle
var posVertical = (widthContainer /2) - (widthAimation /2);
  circle.style.left = posVertical + 'px';
var posHorizontal = (heightContainer /2) - (heightAnimation /2);
  circle.style.top = posHorizontal + 'px';


//default position of container-background-image
var backgroundPositionOffsetVerical = 0;
var backgroundPosition = backgroundPositionOffsetVerical + "px" + " -" + heightContainer + "px";
container.style.backgroundPosition = backgroundPosition;






//Update
document.onkeydown =  function (e) {
    switch (e.keyCode) {
      //right
      case 39:
          backgroundPositionOffsetVerical -= 5;

          break;
      //left
        case 37:
            backgroundPositionOffsetVerical += 5;
            break;

        //up
        case 38:
            break;

        //down
        case 40:
            break;



    }
    circle.style.left = posVertical + 'px';
    circle.style.top = posHorizontal + 'px';
    container.style.backgroundPosition = backgroundPositionOffsetVerical + "px" + " -" + heightContainer + "px";
};



//draw();

//mainloop();
