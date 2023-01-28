let layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 10, 10, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6],
]
var xpos = 121;
var ypos = 200;
var xspeed = 1;
var yspeed = 0;
var maxSpeed = 1;
var xposE = 121;
var yposE = 200;
var xspeedE = 1;
var yspeedE = 0;
var maxSpeedE = 1;
// let emenyBrains = [
//     red, yellow, green, pink
// ]

var upPressed = 0;
var downPressed = 0;
var leftPressed = 0;
var rightPressed = 0;

let maxWidth = 224;
let maxHeight = 247;

// function moveEnemy() {
//     let enemy = document.getElementById('item');

//     xposE = xposE + xspeedE;
//     yposE = yposE + yspeedE;

//     enemy.style.left = xposE;
//     enemy.style.top = yposE;

//     yspeedE = Math.floor(Math.random() * 20);
//     xspeedE = Math.floor(Math.random() * 20);

//     // if (upPressed == 0 && downPressed == 0)
//     //     slowDownY();
//     // if (leftPressed == 0 && rightPressed == 0)
//     //     slowDownX();
// }

function slowDownX() {
    if (xspeed > 0)
        xspeed = xspeed - 1;
    if (xspeed < 0)
        xspeed = xspeed + 1;
}

function slowDownY() {
    if (yspeed > 0)
        yspeed = yspeed - 1;
    if (yspeed < 0)
        yspeed = yspeed + 1;
}

// function enemyMove() {
//     xposE = xposE + xspeedE;
//     yposE = yposE + yspeedE;

//     enemy = document.getElementById('item')
//     enemy.style.left = xposE;
//     enemy.style.top = yposE;
//     // console.log(xposE);
//     // console.log(yposE);
//     if (xposE === maxHeight || ypos === maxWidth) {

//     } else {
//         if (upPressed == 1)
//             yspeedE = Math.max(yspeedE - 1, -1 * maxSpeedE);
//         if (downPressed == 1)
//             yspeedE = Math.min(yspeedE + 1, 1 * maxSpeedE)
//         if (rightPressed == 1)
//             xspeedE = Math.min(xspeedE + 1, 1 * maxSpeedE);
//         if (leftPressed == 1)
//             xspeedE = Math.max(xspeedE - 1, -1 * maxSpeedE);

//         if (upPressed == 0 && downPressed == 0)
//             slowDownY();
//         if (leftPressed == 0 && rightPressed == 0)
//             slowDownX();
//     }

//     setTimeout("enemyMove()", 10);
// }


function gameLoop() {
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;

    pacman = document.getElementById('pacman')

    if (xpos >= maxWidth || ypos >= maxHeight || ypos <= 0 || xpos <= 0) {
        xpos = xpos - 10;
        ypos = ypos - 10;
        console.log(maxHeight);
        console.log(maxWidth);
        console.log("xpos = " + xpos);
        console.log("ypos = " + ypos);

    } else {

    }
    pacman.style.left = xpos;
    pacman.style.top = ypos;
    if (upPressed == 1)
        yspeed = Math.max(yspeed - 1, -1 * maxSpeed);
    if (downPressed == 1)
        yspeed = Math.min(yspeed + 1, 1 * maxSpeed)
    if (rightPressed == 1)
        xspeed = Math.min(xspeed + 1, 1 * maxSpeed);
    if (leftPressed == 1)
        xspeed = Math.max(xspeed - 1, -1 * maxSpeed);

    if (upPressed == 0 && downPressed == 0)
        slowDownY();
    if (leftPressed == 0 && rightPressed == 0)
        slowDownX();

    setTimeout("gameLoop()", 10);
}

function keyDown(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code == 38)
        upPressed = 1;
    console.log("da");
    if (code == 40)
        downPressed = 1;
    if (code == 37)
        leftPressed = 1;
    if (code == 39)
        rightPressed = 1;
}

function keyUp(e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code == 38)
        upPressed = 0;
    if (code == 40)
        downPressed = 0;
    if (code == 37)
        leftPressed = 0;
    if (code == 39)
        rightPressed = 0;
}
document.addEventListener("DOMContentLoaded", gameLoop)
    // document.addEventListener("DOMContentLoaded", enemyMove)

document.addEventListener("keydown", keyDown)
document.addEventListener("keyup", keyUp)