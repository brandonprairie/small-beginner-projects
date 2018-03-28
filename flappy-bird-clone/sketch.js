/*
Author: Brandon Prairie
File: sketch.js
Date: 2019-03-27
Inspired by: https://www.youtube.com/watch?v=cXgA1d_E-jY&t=8s
*/

var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("Pipe Hit");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }



}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}