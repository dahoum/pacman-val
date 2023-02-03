//
//
// Here are constants
//
//

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
    [1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6],
]


//
//
// Here are the initial states
//
//

// This is state of the PacMan
var xpos = 121;
var ypos = 200;
var xspeed = 0;
var yspeed = 0;
let flag = false;

// This is state of the Enemy
var xposE = 121;
var yposE = 200;
var xspeedE = 0;
var yspeedE = 0;
// let emenyBrains = [
//     red, yellow, green, pink
// ]



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

    //
    //
    // Here are the Brains
    //
    //

    // This is the state of the PacMan

    xpos = xpos + xspeed;
    ypos = ypos + yspeed;

    pacman = document.getElementById('pacman')
        // if (flag == true) {


    pacman.style.left = xpos;
    pacman.style.top = ypos;
    // }


    //
    //
    // Execution of the decisions by the Brains
    //
    // 


    setTimeout("gameLoop()", 10);

} // END of gameloop()


for (let i = 0; i < layout.length; i++) {
    if (layout[i] == 0) {
        console.log(layout[i]);
        flag = true
    }
}
document.addEventListener("DOMContentLoaded", gameLoop)

document.addEventListener("keydown", (event) => {
    let code = event.keyCode ? event.keyCode : event.which;

    // Show which key is pressed.
    document.getElementById("keydown").innerHTML = code;

    if (code == 38) {
        // up
        yspeed = -1
        xspeed = 0
    }

    if (code == 40) {
        // down
        yspeed = 1
        xspeed = 0
    }

    if (code == 37) {
        // left;
        xspeed = -1
        yspeed = 0
    }

    if (code == 39) {
        // right;
        xspeed = 1
        yspeed = 0
    }

}, true);