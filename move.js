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

    // CURRENT STATE

    // Where are we?
    if ((xpos % 8) === 0) {
        var PacManxcol = xpos / 8;
    }

    if ((ypos % 8) === 0) {
        var PacManycol = ypos / 8;
    }

    // This code is not complete.
    // When we complete it, it will tell us what action is possible on the block we are.
    for (let i = 0; i < layout.length; i++) {
        // you make a 2nd cycle
        // you have PacManxcol
        // you have PacManycol
        // so you can compare what is the number in the matrix of the current square
        // WHICH IS USELESS ;)
        // What is useful are
        // A.
        // CAN I CONTINUE?
        // For this you need the direction? => var PacManDirection
        // So depending on the direction you can check the next square on the array
        // If not 0 you have to stop => var PacManStopped
        // B.
        // TURNING ON CROSSINGS
        // 1.
        // Is there a desired direction at all?
        // ...
        // How do we answer this?
        // The semantically cleanest answer is "Is there a pressed key?"
        // For this to work, after you process the pressed key, you must reset this variable
        // 2.
        // Can I turn here?
        // To answer this we must know which is the desired direction?
        // Also we must know if we are on a crossing:
        // — we have current coordinates which change w/ step 1 pixel
        // - we have the array w/ the docts which are on every 8 pixels
        // — so we should execute the turning logic only if the current x/8 is an integer
        // can I continue?
        if (layout[i] == 0) {
            flag = true;
        }
    }


    // You take a turn here, but you do not know if you can take a turn.
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

document.addEventListener("DOMContentLoaded", gameLoop)

// Here we capture the pressed key.
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