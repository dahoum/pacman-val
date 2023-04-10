// document.addEventListener('DOMContentLoaded', () => {
//     let el = document.getElementById("pellets");
//     setInterval(() => {
//         el.style.opacity = '0'
//          }, 200)
// // const pacmanC = document.getElementById('pacman');
// // const frame = [
// //     '209px -15px',
// //     '225px -15px'
// // ]
// // let currentFrameIndex = 0;

// // setInterval(() => {
// //     pacmanC.style.backgroundPosition = frame[currentFrameIndex];
// //     currentFrameIndex = (currentFrameIndex + 1)  % frame.length;
// // }, 200)

// });













//
// This is the Game Engine.
//
// The execution begins when it is loaded.
//

// Reset the Game on Start

// We clear the localStorage on Start in order to forget the pressed keys, etc.
// window.localStorage.clear();

// The whole Game Engine is inside.
// document.addEventListener('DOMContentLoaded', () => {




//     //
//     //
//     // Initialisation
//     //
//     //

//     //
//     // Values
//     //

//     // TODO
//     // Later we can make it in a function, so that we can "reset" the game from w/in the game.
//     // Initial coordinates of the PacMan.
//     // They do not work at the moment, we should make them work.
//     // var xpos = 124;
//     // var ypos = 160;
//     // Initial speed of the PacMan.
//     // var xspeed = 1;
//     // var yspeed = 0;
//     // Game Speed
//     // var maxSpeed = 1;




//     //
//     //
//     // End of creating of the labyrint
//     //
//     //

//     //
//     // Place the Actors
//     //

//     // document.getElementById('pacman').style.left = xpos;
//     // document.getElementById('pacman').style.top = ypos;

//     // function moveP(e) {
//     //     xpos = xpos + xspeed;
//     //     ypos = ypos + yspeed;
//     //     switch (e.keyCode) {
//     //         case 37:
//     //             // left
//     //             document.getElementById('pacman').style.left = xpos;
//     //             document.getElementById('pacman').style.top = ypos;
//     //             break
//     //         case 38:
//     //             // up
//     //             document.getElementById('pacman').style.left = xpos;
//     //             document.getElementById('pacman').style.top = ypos;
//     //             break
//     //         case 39:
//     //             // right
//     //             document.getElementById('pacman').style.left = xpos;
//     //             document.getElementById('pacman').style.top = ypos;
//     //             break
//     //         case 40:
//     //             // down
//     //             document.getElementById('pacman').style.left = xpos;
//     //             document.getElementById('pacman').style.top = ypos;
//     //             break
//     //     }
//     // }
//     // // yspeed = Math.max(yspeed - 1, -1 * maxSpeed);
//     // document.addEventListener('keyup', moveP)

// });
































// var xpos = 100;
// var ypos = 100;
// var xspeed = 1;
// var yspeed = 0;
// var maxSpeed = 1;

// var upPressed = 0;
// var downPressed = 0;
// var leftPressed = 0;
// var rightPressed = 0;

// function slowDownX() {
//     if (xspeed > 0)
//         xspeed = xspeed - 1;
//     if (xspeed < 0)
//         xspeed = xspeed + 1;
// }

// function slowDownY() {
//     if (yspeed > 0)
//         yspeed = yspeed - 1;
//     if (yspeed < 0)
//         yspeed = yspeed + 1;
// }

// function gameLoop() {

//     // or, without boundaries:
//     xpos = xpos + xspeed;
//     ypos = ypos + yspeed;

//     // change actual position
//     document.getElementById('pacman').style.left = xpos;
//     document.getElementById('pacman').style.top = ypos;

//     // change speed based on keyboard events
//     if (upPressed == 1)
//         yspeed = Math.max(yspeed - 1, -1 * maxSpeed);
//     if (downPressed == 1)
//         yspeed = Math.min(yspeed + 1, 1 * maxSpeed)
//     if (rightPressed == 1)
//         xspeed = Math.min(xspeed + 1, 1 * maxSpeed);
//     if (leftPressed == 1)
//         xspeed = Math.max(xspeed - 1, -1 * maxSpeed);

//     // deceleration
//     if (upPressed == 0 && downPressed == 0)
//         slowDownY();
//     if (leftPressed == 0 && rightPressed == 0)
//         slowDownX();

//     // loop
//     setTimeout("gameLoop()", 10);
// }

// function keyDown(e) {
//     var code = e.keyCode ? e.keyCode : e.which;
//     if (code == 38)
//         upPressed = 1;
//     if (code == 40)
//         downPressed = 1;
//     if (code == 37)
//         leftPressed = 1;
//     if (code == 39)
//         rightPressed = 1;
// }

// function keyUp(e) {
//     var code = e.keyCode ? e.keyCode : e.which;
//     if (code == 38)
//         upPressed = 0;
//     if (code == 40)
//         downPressed = 0;
//     if (code == 37)
//         leftPressed = 0;
//     if (code == 39)
//         rightPressed = 0;
// }
// var key_pressed =
//     document.getElementById('pacman');

// key_pressed
//     .addEventListener("keydown", keyDown);
// key_pressed
//     .addEventListener("keypress", gameLoop);
// key_pressed
//     .addEventListener("keyup", keyUp);
// document.addEventListener("keydown", keyDown);
// document.addEventListener("keyup", keyUp);
// document.addEventListener("load", gameLoop);