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
// TODO
// Move it in PacMan.js
var xpos = 116;
var ypos = 192;
var xspeed = 0;
var yspeed = 0;
var RequestPacManDirection;
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

        // Logging
        // Show in which column we are
        document.getElementById("PacManxcol").innerHTML = PacManxcol;
        console.log("x = " + PacManxcol);
        // alert(PacManxcol)
    }

    if ((ypos % 8) === 0) {
        var PacManycol = ypos / 8;

        // Logging
        // Show in which column we are
        document.getElementById("PacManycol").innerHTML = PacManycol;
        // console.log("y = " + PacManycol);
        // console.log(PacManycol);
        // alert(PacManycol)
    }

    // This code is not complete.
    // When we complete it, it will tell us what action is possible on the block we are.
    for (let i = 0; i < layout.length; i++) {
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i] != 0) {

            }
        }
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

    }


    // You take a turn here, but you do not know if you can take a turn.
    xpos = xpos + xspeed;
    ypos = ypos + yspeed;

    pacman = document.getElementById('pacman')

    // TODO
    // Still does not work
    if (PacManxcol > 1 && PacManxcol <= 30) {
        pacman.style.left = xpos;
        pacman.style.top = ypos;
    }
    if (PacManycol > 1 && PacManycol <= 30) {
        pacman.style.left = xpos;
        pacman.style.top = ypos;
    }

    upPressed = window.localStorage.getItem("keyPressedUp");
    downPressed = window.localStorage.getItem("keyPressedDown");
    rightPressed = window.localStorage.getItem("keyPressedRight");
    leftPressed = window.localStorage.getItem("keyPressedLeft");


    //
    //
    // Execution of the decisions by the Brains
    //
    //


    setTimeout("gameLoop()", 10);

} // END of gameloop()

// Make move and change the direction
function keyDown(e) {
    // TODO
    // Change from code to key name    Done
    if (e.code == "ArrowUp") {
        // upPressed = 1;
        yspeed = -1
        xspeed = 0
        window.localStorage.setItem("keyPressedUp", "1");
    }
    if (e.code == "ArrowDown") {
        downPressed = 1;
        yspeed = 1
        xspeed = 0
        window.localStorage.setItem("keyPressedDown", "1");
    }

    if (e.code == "ArrowLeft") {
        leftPressed = 1;
        yspeed = 0
        xspeed = -1
        window.localStorage.setItem("keyPressedLeft", "1");
    }

    if (e.code == "ArrowRight") {
        rightPressed = 1;
        yspeed = 0
        xspeed = 1
        window.localStorage.setItem("keyPressedRight", "1");
    }

}
document.addEventListener("DOMContentLoaded", gameLoop)

// Here we capture the pressed key.
// TODO
// Change from code to key name
// document.addEventListener("keydown", (event) => {
//     let code = event.keyCode ? event.keyCode : event.which;

//     // Show which key is pressed.
//     document.getElementById("keydown").innerHTML = code;

//     // TODO
//     // Simplify to "keyPressed" or so, up/down is not interesting
//     function keyUp(e) {
//         let code = e.keyCode ? e.keyCode : e.which;
//         if (code == UP_ARROW)
//             upPressed = 0;
//         window.localStorage.setItem("keyPressedUp", "1");
//         if (code === DOWN_ARROW)
//             downPressed = 1;
//         window.localStorage.setItem("keyPressedDown", "1");
//         if (code === LEFT_ARROW)
//             leftPressed = 1;
//         window.localStorage.setItem("keyPressedLeft", "1");
//         if (code == RIGHT_ARROW)
//             rightPressed = 1;
//     }

//         // document.addEventListener("DOMContentLoaded", enemyMove)

//     // one is enough and this is keyDown

//         // document.addEventListener("keyup", keyUp)
//         // rightPressed = 1;

// }, true); 
document.addEventListener("DOMContentLoaded", gameLoop)
document.addEventListener("keydown", keyDown)
window.localStorage.setItem("keyPressedRight", "1");