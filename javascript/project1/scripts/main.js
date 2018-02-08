/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

//creating gameArea;
main();

function main(){

  const canvas = document.querySelector("#glCanvas");
  const gl = canvas.getContext("webgl");

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

}

main();
//draw();

//mainloop();
